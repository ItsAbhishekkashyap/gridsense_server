const prisma = require('../db/prisma');
const redis = require('../db/redis');
const { sendSuccess, sendError } = require('../utils/response.utils');
const { calculateMoneySaved } = require('../utils/solar.utils');

function calcHealthScore(criticalCount, warningCount) {
  if (criticalCount >= 2) return 35;
  if (criticalCount === 1) return 57;
  if (warningCount >= 1)   return 80;
  return 97;
}

async function getStats(req, res) {
  try {
    const panels = await prisma.panel.findMany({
      where: { userId: req.user.id, isActive: true },
      include: {
        readings: { orderBy: { timestamp: 'desc' }, take: 1 },
      },
    });

    const activeAlerts = await prisma.alert.findMany({
      where: { panel: { userId: req.user.id }, resolved: false },
      select: { severity: true },
    });

    let totalPower = 0;
    let totalEfficiency = 0;
    let readingCount = 0;

    for (const panel of panels) {
      if (panel.readings.length > 0) {
        const r = panel.readings[0];
        totalPower      += r.power;
        totalEfficiency += r.efficiency;
        readingCount++;
      }
    }

    const criticalCount = activeAlerts.filter((a) => a.severity === 'CRITICAL').length;
    const warningCount  = activeAlerts.filter((a) => a.severity === 'WARNING').length;
    const systemHealthScore = calcHealthScore(criticalCount, warningCount);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayReadings = await prisma.panelReading.findMany({
      where: { panel: { userId: req.user.id }, timestamp: { gte: today } },
      select: { power: true, timestamp: true },
      orderBy: { timestamp: 'asc' },
    });

    let totalEnergyToday = 0;
    for (let i = 1; i < todayReadings.length; i++) {
      const dt = (new Date(todayReadings[i].timestamp) - new Date(todayReadings[i - 1].timestamp)) / 3600000;
      totalEnergyToday += ((todayReadings[i].power + todayReadings[i - 1].power) / 2) * dt;
    }

    const tariffRate = parseFloat(process.env.TARIFF_RATE) || 8.0;
    const totalEnergyKwh = totalEnergyToday / 1000;
    const moneySavedToday = calculateMoneySaved(totalEnergyKwh, tariffRate);

    const stats = {
      totalPower:       Math.round(totalPower * 100) / 100,
      systemEfficiency: readingCount > 0 ? Math.round((totalEfficiency / readingCount) * 100) / 100 : 0,
      totalEnergyToday: Math.round(totalEnergyKwh * 1000) / 1000,
      moneySavedToday:  Math.round(moneySavedToday * 100) / 100,
      systemHealthScore,
      activeAlerts:     activeAlerts.length,
      panelCount:       panels.length,
    };

    try {
      await redis.setex(`dashboard:stats:${req.user.id}`, 10, JSON.stringify(stats));
    } catch {}

    return sendSuccess(res, stats);
  } catch (err) {
    console.error('GetStats error:', err);
    return sendError(res, 'Failed to get stats', 500);
  }
}

async function getAlerts(req, res) {
  try {
    const { page = 1, limit = 20, severity, category, panelId, resolved } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = { panel: { userId: req.user.id } };

    if (resolved !== undefined) where.resolved = resolved === 'true';
    else where.resolved = false;

    if (severity) where.severity = severity;
    if (category) where.category = category;
    if (panelId) where.panelId = panelId;

    const alerts = await prisma.alert.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: parseInt(limit),
      include: { panel: { select: { id: true, name: true, location: true } } },
    });

    const total = await prisma.alert.count({ where });

    return sendSuccess(res, { alerts, pagination: { page: parseInt(page), limit: parseInt(limit), total } });
  } catch (err) {
    console.error('GetAlerts error:', err);
    return sendError(res, 'Failed to get alerts', 500);
  }
}

async function getEnergy(req, res) {
  try {
    const { days = 7 } = req.query;
    const from = new Date();
    from.setDate(from.getDate() - parseInt(days));

    const panels = await prisma.panel.findMany({
      where: { userId: req.user.id, isActive: true },
      select: { id: true, name: true },
    });

    const panelIds = panels.map((p) => p.id);

    const readings = await prisma.panelReading.findMany({
      where: { panelId: { in: panelIds }, timestamp: { gte: from } },
      orderBy: { timestamp: 'asc' },
      select: { panelId: true, power: true, timestamp: true },
    });

    const grouped = {};
    for (const r of readings) {
      if (!grouped[r.panelId]) grouped[r.panelId] = [];
      grouped[r.panelId].push({ power: r.power, timestamp: r.timestamp });
    }

    const panelData = panels.map((p) => ({
      panelId:  p.id,
      name:     p.name,
      readings: grouped[p.id] || [],
    }));

    return sendSuccess(res, { panelData });
  } catch (err) {
    console.error('GetEnergy error:', err);
    return sendError(res, 'Failed to get energy data', 500);
  }
}

module.exports = { getStats, getAlerts, getEnergy };
