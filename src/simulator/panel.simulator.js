const prisma = require('../db/prisma');
const redis = require('../db/redis');
const { initFaultState, applyFault, getCurrentFault } = require('./fault.injector');
const { checkAndCreateAlert } = require('../services/alert.service');
const { analyzePanel } = require('../services/ai.service');
const { createDemoPanels } = require('../utils/seed.utils');
const { getIo } = require('../websocket/io.store');

const userSimulations = new Map();
let globalTickStarted = false;

function getCurrentIrradiance() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  let base = 0;

  if (hour < 5 || hour >= 20) {
    base = 0;
  } else if (hour >= 5 && hour < 7) {
    base = ((hour - 5) * 60 + minute) / 120 * 200;
  } else if (hour >= 7 && hour < 11) {
    base = 200 + ((hour - 7) * 60 + minute) / 240 * 750;
  } else if (hour >= 11 && hour < 13) {
    base = 950 + (Math.random() - 0.5) * 60;
  } else if (hour >= 13 && hour < 17) {
    base = 950 - ((hour - 13) * 60 + minute) / 240 * 650;
  } else if (hour >= 17 && hour < 20) {
    base = 300 - ((hour - 17) * 60 + minute) / 180 * 300;
  }

  base *= (0.95 + Math.random() * 0.10);
  return Math.max(0, base);
}

function generateReading(ratedPower) {
  const irradiance = getCurrentIrradiance();
  const irradianceFraction = irradiance / 1000;

  const ambientTemp = 28;
  const NOCT = 45;
  const cellTemp = ambientTemp + (irradiance * (NOCT - 20) / 800);
  const temperature = cellTemp + (Math.random() - 0.5) * 4;

  const tempDerating = 1 - (Math.max(0, temperature - 25) * 0.004);

  const efficiencyFactor = irradianceFraction * tempDerating;

  const voltage = irradiance > 0
    ? Math.max(0, 36 + irradianceFraction * 4 - (temperature - 25) * 0.12 + (Math.random() - 0.5))
    : 0;

  const power = irradiance > 0 ? ratedPower * efficiencyFactor : 0;
  const current = voltage > 0 ? power / voltage : 0;
  const efficiency = irradiance > 0 ? (power / ratedPower) * 100 : 0;
  const humidity = 50 + Math.sin(Date.now() / 3600000) * 15 + (Math.random() - 0.5) * 6;

  return {
    voltage:     Math.max(0, Math.round(voltage     * 100) / 100),
    current:     Math.max(0, Math.round(current     * 1000) / 1000),
    power:       Math.max(0, Math.round(power       * 10) / 10),
    temperature: Math.round(temperature * 10) / 10,
    irradiance:  Math.max(0, Math.round(irradiance  * 10) / 10),
    humidity:    Math.max(0, Math.min(100, Math.round(humidity * 10) / 10)),
    efficiency:  Math.max(0, Math.min(100, Math.round(efficiency * 100) / 100)),
    timestamp:   new Date().toISOString(),
  };
}

function calcHealthScore(criticalCount, warningCount) {
  if (criticalCount >= 2) return 30 + Math.floor(Math.random() * 15);
  if (criticalCount === 1) return 50 + Math.floor(Math.random() * 15);
  if (warningCount >= 1) return 75 + Math.floor(Math.random() * 10);
  return 95 + Math.floor(Math.random() * 5);
}

async function tickReadings() {
  const io = getIo();
  if (!io) return;

  for (const [userId, sim] of userSimulations.entries()) {
    for (const panel of sim.panels) {
      try {
        let reading = generateReading(panel.ratedPower);
        reading = applyFault(reading, panel.id);
        const faultType = getCurrentFault(panel.id);

        const faultMap = {
          NONE: 'NONE', DUST: 'DUST', TEMPERATURE_SPIKE: 'TEMPERATURE_SPIKE',
          PARTIAL_SHADING: 'PARTIAL_SHADING', INVERTER_FAULT: 'INVERTER_FAULT', WIRING_ISSUE: 'WIRING_ISSUE',
        };

        prisma.panel.update({
          where: { id: panel.id },
          data: { currentFault: faultMap[faultType] || 'NONE' },
        }).catch(() => {});

        const prev = sim.prevReadings.get(panel.id) || [];
        prev.push(reading);
        if (prev.length > 10) prev.shift();
        sim.prevReadings.set(panel.id, prev);

        const buf = sim.buffers.get(panel.id) || [];
        buf.push({ ...reading, panelId: panel.id });
        if (buf.length > 30) buf.shift();
        sim.buffers.set(panel.id, buf);

        redis.setex(`panel:${panel.id}:latest`, 30, JSON.stringify(reading)).catch(() => {});

        io.to(`user-${userId}`).emit('panel:reading', { panelId: panel.id, reading });

        await checkAndCreateAlert(panel.id, reading, prev, panel.ratedPower, io);
      } catch (err) {
        console.error(`[Sim] Reading error panel ${panel.id}:`, err.message);
      }
    }
  }
}

async function tickBatchWrite() {
  try {
    const allData = [];
    const clearBuffers = [];

    for (const [, sim] of userSimulations.entries()) {
      for (const panel of sim.panels) {
        const buf = sim.buffers.get(panel.id) || [];
        if (buf.length === 0) continue;

        for (const r of buf) {
          allData.push({
            panelId: panel.id,
            voltage:     r.voltage,
            current:     r.current,
            power:       r.power,
            temperature: r.temperature,
            irradiance:  r.irradiance,
            humidity:    r.humidity,
            efficiency:  r.efficiency,
            timestamp:   new Date(r.timestamp),
          });
        }
        clearBuffers.push([sim, panel.id]);
      }
    }

    if (allData.length > 0) {
      await prisma.panelReading.createMany({ data: allData });
      for (const [sim, panelId] of clearBuffers) {
        sim.buffers.set(panelId, []);
      }
    }
  } catch (err) {
    // Silently suppress transient cloud batch write errors
  }
}

async function tickAIAnalysis() {
  const io = getIo();
  if (!io) return;

  for (const [userId, sim] of userSimulations.entries()) {
    for (const panel of sim.panels) {
      try {
        const prev = sim.prevReadings.get(panel.id) || [];
        if (prev.length === 0) continue;

        const current = prev[prev.length - 1];
        const analysis = await analyzePanel(panel.id, current, prev, panel.ratedPower);

        io.to(`user-${userId}`).emit('panel:analysis', { panelId: panel.id, analysis });
      } catch (err) {
        console.error(`[Sim] AI analysis error panel ${panel.id}:`, err.message);
      }
    }
  }
}

async function tickDashboardStats() {
  const io = getIo();
  if (!io) return;

  for (const [userId, sim] of userSimulations.entries()) {
    try {
      let totalPower = 0;
      let totalEfficiency = 0;
      let totalEnergyKwh = 0;
      let count = 0;

      for (const panel of sim.panels) {
        const prev = sim.prevReadings.get(panel.id) || [];
        if (prev.length > 0) {
          const latest = prev[prev.length - 1];
          totalPower += latest.power;
          totalEfficiency += latest.efficiency;
          count++;

          // Accumulate energy from in-memory readings (Power (W) * 2s / 3600000 = kWh)
          for (const r of prev) {
            totalEnergyKwh += (r.power * 2) / 3600000;
          }
        }
      }

      const tariffRate = parseFloat(process.env.TARIFF_RATE) || 8.0;

      io.to(`user-${userId}`).emit('dashboard:stats', {
        totalPower:       Math.round(totalPower * 100) / 100,
        systemEfficiency: count > 0 ? Math.round((totalEfficiency / count) * 100) / 100 : 0,
        totalEnergyToday: Math.round(totalEnergyKwh * 1000) / 1000,
        moneySavedToday:  Math.round(totalEnergyKwh * tariffRate * 100) / 100,
        systemHealthScore: 98,
        activeAlerts:     0,
      });
    } catch (err) {
      console.error(`[Sim] Stats error user ${userId}:`, err.message);
    }
  }
}

function startGlobalTick() {
  if (globalTickStarted) return;
  globalTickStarted = true;

  setInterval(tickReadings,       2000);
  setInterval(tickBatchWrite,    60000);
  setInterval(tickAIAnalysis,    900000); // 15 minutes
  setInterval(tickDashboardStats, 5000);

  console.log('[Sim] Global tick started');
}

async function addUserToSimulator(userId) {
  if (userSimulations.has(userId)) return;

  const panels = await createDemoPanels(userId, prisma);
  const orderedPanels = panels.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  for (let i = 0; i < orderedPanels.length; i++) {
    initFaultState(orderedPanels[i].id, i);
  }

  userSimulations.set(userId, {
    panels:       orderedPanels,
    buffers:      new Map(orderedPanels.map((p) => [p.id, []])),
    prevReadings: new Map(orderedPanels.map((p) => [p.id, []])),
  });

  console.log(`[Sim] Started simulation for user ${userId} with ${orderedPanels.length} panels`);
}

async function startSimulator() {
  const users = await prisma.user.findMany({
    where: { isActive: true },
    select: { id: true },
  });

  for (const user of users) {
    await addUserToSimulator(user.id);
  }

  startGlobalTick();

  if (users.length === 0) {
    console.log('[Sim] No users found — will auto-start when first user signs up');
  }
}

module.exports = { startSimulator, addUserToSimulator };
