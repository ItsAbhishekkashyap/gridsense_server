const prisma = require('../db/prisma');
const { sendSuccess, sendError } = require('../utils/response.utils');
const { calculateSystemHealth } = require('../utils/solar.utils');

async function getConfig(req, res) {
  try {
    let config = await prisma.systemConfig.findUnique({
      where: { userId: req.user.id },
    });

    if (!config) {
      config = await prisma.systemConfig.create({
        data: { userId: req.user.id },
      });
    }

    return sendSuccess(res, { config });
  } catch (err) {
    console.error('GetConfig error:', err);
    return sendError(res, 'Failed to get config', 500);
  }
}

async function updateConfig(req, res) {
  try {
    const { systemName, location, tariffRate, totalCapacity } = req.body;

    const config = await prisma.systemConfig.upsert({
      where: { userId: req.user.id },
      update: {
        ...(systemName && { systemName }),
        ...(location && { location }),
        ...(tariffRate !== undefined && { tariffRate: parseFloat(tariffRate) }),
        ...(totalCapacity !== undefined && { totalCapacity: parseFloat(totalCapacity) }),
      },
      create: {
        userId: req.user.id,
        systemName: systemName || 'My Solar System',
        location: location || 'Lucknow, UP, India',
        tariffRate: tariffRate ? parseFloat(tariffRate) : 8.0,
        totalCapacity: totalCapacity ? parseFloat(totalCapacity) : 1.8,
      },
    });

    return sendSuccess(res, { config }, 'Config updated');
  } catch (err) {
    console.error('UpdateConfig error:', err);
    return sendError(res, 'Failed to update config', 500);
  }
}

async function getHealth(req, res) {
  try {
    const panels = await prisma.panel.findMany({
      where: { userId: req.user.id, isActive: true },
      include: {
        alerts: { where: { resolved: false } },
        readings: { orderBy: { timestamp: 'desc' }, take: 1 },
      },
    });

    const score = calculateSystemHealth(panels);
    const activeAlerts = panels.reduce((sum, p) => sum + p.alerts.length, 0);

    return sendSuccess(res, {
      score,
      panelCount: panels.length,
      activeAlerts,
      status: score >= 80 ? 'HEALTHY' : score >= 60 ? 'DEGRADED' : 'CRITICAL',
    });
  } catch (err) {
    console.error('GetHealth error:', err);
    return sendError(res, 'Failed to get health', 500);
  }
}

module.exports = { getConfig, updateConfig, getHealth };
