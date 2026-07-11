const prisma = require('../db/prisma');
const { sendSuccess, sendError } = require('../utils/response.utils');
const { getIo } = require('../websocket/io.store');

async function getAlerts(req, res) {
  try {
    const { page = 1, limit = 20, severity, category, panelId, resolved, from, to } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const where = { panel: { userId: req.user.id } };

    if (resolved !== undefined) where.resolved = resolved === 'true';
    if (severity) where.severity = severity;
    if (category) where.category = category;
    if (panelId) where.panelId = panelId;
    if (from || to) {
      where.createdAt = {};
      if (from) where.createdAt.gte = new Date(from);
      if (to) where.createdAt.lte = new Date(to);
    }

    const [alerts, total] = await Promise.all([
      prisma.alert.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: parseInt(limit),
        include: { panel: { select: { id: true, name: true } } },
      }),
      prisma.alert.count({ where }),
    ]);

    return sendSuccess(res, {
      alerts,
      pagination: { page: parseInt(page), limit: parseInt(limit), total, pages: Math.ceil(total / parseInt(limit)) },
    });
  } catch (err) {
    console.error('GetAlerts error:', err);
    return sendError(res, 'Failed to get alerts', 500);
  }
}

async function resolveAlert(req, res) {
  try {
    const alert = await prisma.alert.findFirst({
      where: { id: req.params.id, panel: { userId: req.user.id } },
      include: { panel: { select: { id: true, name: true, userId: true } } },
    });

    if (!alert) {
      return sendError(res, 'Alert not found', 404);
    }

    const updated = await prisma.alert.update({
      where: { id: req.params.id },
      data: { resolved: true, resolvedAt: new Date() },
      include: { panel: { select: { id: true, name: true } } },
    });

    const io = getIo();
    if (io) {
      io.to(`user-${req.user.id}`).emit('panel:alert', {
        panelId: alert.panelId,
        alert: updated,
        action: 'resolved',
      });
    }

    return sendSuccess(res, { alert: updated }, 'Alert resolved');
  } catch (err) {
    console.error('ResolveAlert error:', err);
    return sendError(res, 'Failed to resolve alert', 500);
  }
}

async function unresolveAlert(req, res) {
  try {
    const alert = await prisma.alert.findFirst({
      where: { id: req.params.id, panel: { userId: req.user.id } },
    });

    if (!alert) {
      return sendError(res, 'Alert not found', 404);
    }

    const updated = await prisma.alert.update({
      where: { id: req.params.id },
      data: { resolved: false, resolvedAt: null },
      include: { panel: { select: { id: true, name: true } } },
    });

    const io = getIo();
    if (io) {
      io.to(`user-${req.user.id}`).emit('panel:alert', {
        panelId: alert.panelId,
        alert: updated,
        action: 'unresolved',
      });
    }

    return sendSuccess(res, { alert: updated }, 'Alert marked as unresolved');
  } catch (err) {
    console.error('UnresolveAlert error:', err);
    return sendError(res, 'Failed to unresolve alert', 500);
  }
}

module.exports = { getAlerts, resolveAlert, unresolveAlert };
