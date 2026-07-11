const prisma = require('../db/prisma');
const redis = require('../db/redis');
const { sendSuccess, sendError } = require('../utils/response.utils');
const { calculateDegradation, calculateLifespanProjection } = require('../utils/solar.utils');

async function getPanels(req, res) {
  try {
    const panels = await prisma.panel.findMany({
      where: { userId: req.user.id, isActive: true },
      include: {
        readings: {
          orderBy: { timestamp: 'desc' },
          take: 1,
        },
        alerts: {
          where: { resolved: false },
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    return sendSuccess(res, { panels });
  } catch (err) {
    console.error('GetPanels error:', err);
    return sendError(res, 'Failed to get panels', 500);
  }
}

async function createPanel(req, res) {
  try {
    const { name, location, ratedPower, installDate, warrantyYears } = req.body;

    if (!name || !location || !ratedPower || !installDate) {
      return sendError(res, 'name, location, ratedPower, and installDate are required', 400);
    }

    const panel = await prisma.panel.create({
      data: {
        userId: req.user.id,
        name,
        location,
        ratedPower: parseFloat(ratedPower),
        installDate: new Date(installDate),
        warrantyYears: warrantyYears ? parseInt(warrantyYears) : 25,
      },
    });

    return sendSuccess(res, { panel }, 'Panel created successfully', 201);
  } catch (err) {
    console.error('CreatePanel error:', err);
    return sendError(res, 'Failed to create panel', 500);
  }
}

async function getPanelById(req, res) {
  try {
    const panel = await prisma.panel.findFirst({
      where: { id: req.params.id, userId: req.user.id, isActive: true },
      include: {
        readings: {
          orderBy: { timestamp: 'desc' },
          take: 50,
        },
        alerts: {
          orderBy: { createdAt: 'desc' },
          take: 20,
        },
      },
    });

    if (!panel) {
      return sendError(res, 'Panel not found', 404);
    }

    const degradation = calculateDegradation(panel.installDate);
    const lifespan = calculateLifespanProjection(
      100 - degradation.totalDegradationPercent,
      panel.installDate,
      panel.warrantyYears
    );

    return sendSuccess(res, { panel, degradation, lifespan });
  } catch (err) {
    console.error('GetPanelById error:', err);
    return sendError(res, 'Failed to get panel', 500);
  }
}

async function updatePanel(req, res) {
  try {
    const panel = await prisma.panel.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!panel) {
      return sendError(res, 'Panel not found', 404);
    }

    const { name, location, ratedPower, warrantyYears } = req.body;

    const updated = await prisma.panel.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(location && { location }),
        ...(ratedPower && { ratedPower: parseFloat(ratedPower) }),
        ...(warrantyYears && { warrantyYears: parseInt(warrantyYears) }),
      },
    });

    return sendSuccess(res, { panel: updated }, 'Panel updated');
  } catch (err) {
    console.error('UpdatePanel error:', err);
    return sendError(res, 'Failed to update panel', 500);
  }
}

async function deletePanel(req, res) {
  try {
    const panel = await prisma.panel.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!panel) {
      return sendError(res, 'Panel not found', 404);
    }

    await prisma.panel.update({
      where: { id: req.params.id },
      data: { isActive: false },
    });

    return sendSuccess(res, null, 'Panel deactivated');
  } catch (err) {
    console.error('DeletePanel error:', err);
    return sendError(res, 'Failed to deactivate panel', 500);
  }
}

async function getPanelReadings(req, res) {
  try {
    const { page = 1, limit = 20, from, to } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {
      panelId: req.params.id,
      panel: { userId: req.user.id },
    };

    if (from || to) {
      where.timestamp = {};
      if (from) where.timestamp.gte = new Date(from);
      if (to) where.timestamp.lte = new Date(to);
    }

    const [readings, total] = await Promise.all([
      prisma.panelReading.findMany({
        where,
        orderBy: { timestamp: 'desc' },
        skip,
        take: parseInt(limit),
      }),
      prisma.panelReading.count({ where }),
    ]);

    return sendSuccess(res, {
      readings,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (err) {
    console.error('GetPanelReadings error:', err);
    return sendError(res, 'Failed to get readings', 500);
  }
}

async function getPanelAlerts(req, res) {
  try {
    const { resolved, page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = {
      panelId: req.params.id,
      panel: { userId: req.user.id },
    };

    if (resolved !== undefined) {
      where.resolved = resolved === 'true';
    }

    const [alerts, total] = await Promise.all([
      prisma.alert.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit),
        include: { panel: { select: { name: true } } },
      }),
      prisma.alert.count({ where }),
    ]);

    return sendSuccess(res, {
      alerts,
      pagination: { page: parseInt(page), limit: parseInt(limit), total },
    });
  } catch (err) {
    console.error('GetPanelAlerts error:', err);
    return sendError(res, 'Failed to get alerts', 500);
  }
}

async function getPanelSummary(req, res) {
  try {
    const panel = await prisma.panel.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!panel) {
      return sendError(res, 'Panel not found', 404);
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const summaries = await prisma.dailySummary.findMany({
      where: {
        panelId: req.params.id,
        date: { gte: thirtyDaysAgo },
      },
      orderBy: { date: 'desc' },
    });

    return sendSuccess(res, { summaries });
  } catch (err) {
    console.error('GetPanelSummary error:', err);
    return sendError(res, 'Failed to get summary', 500);
  }
}

async function getPanelAnalysis(req, res) {
  try {
    const panel = await prisma.panel.findFirst({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!panel) {
      return sendError(res, 'Panel not found', 404);
    }

    let analysis = null;
    try {
      const cached = await redis.get(`panel:${req.params.id}:analysis`);
      if (cached) {
        analysis = JSON.parse(cached);
      }
    } catch {}

    return sendSuccess(res, { analysis });
  } catch (err) {
    console.error('GetPanelAnalysis error:', err);
    return sendError(res, 'Failed to get analysis', 500);
  }
}

module.exports = {
  getPanels,
  createPanel,
  getPanelById,
  updatePanel,
  deletePanel,
  getPanelReadings,
  getPanelAlerts,
  getPanelSummary,
  getPanelAnalysis,
};
