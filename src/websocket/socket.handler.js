const { verifyAccessToken } = require('../utils/jwt.utils');
const prisma = require('../db/prisma');
const redis = require('../db/redis');

function setupSocketHandler(io) {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication required'));
      }

      const decoded = verifyAccessToken(token);
      socket.userId = decoded.id;
      next();
    } catch (err) {
      next(new Error('Invalid token'));
    }
  });

  io.on('connection', async (socket) => {
    const userId = socket.userId;
    socket.join(`user-${userId}`);

    console.log(`Socket connected: user ${userId}`);

    try {
      const panels = await prisma.panel.findMany({
        where: { userId, isActive: true },
        select: { id: true, name: true, location: true, ratedPower: true, currentFault: true },
      });

      for (const panel of panels) {
        try {
          const latestRaw = await redis.get(`panel:${panel.id}:latest`);
          if (latestRaw) {
            socket.emit('panel:reading', {
              panelId: panel.id,
              reading: JSON.parse(latestRaw),
            });
          }

          const analysisRaw = await redis.get(`panel:${panel.id}:analysis`);
          if (analysisRaw) {
            socket.emit('panel:analysis', {
              panelId: panel.id,
              analysis: JSON.parse(analysisRaw),
            });
          }
        } catch {}
      }

      const activeAlerts = await prisma.alert.findMany({
        where: { panel: { userId }, resolved: false },
        include: { panel: { select: { id: true, name: true } } },
        orderBy: { createdAt: 'desc' },
        take: 20,
      });

      socket.emit('alerts:initial', { alerts: activeAlerts });
    } catch (err) {
      console.error('Socket init error:', err.message);
    }

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: user ${userId}`);
    });

    socket.on('ping', () => {
      socket.emit('pong');
    });
  });
}

module.exports = { setupSocketHandler };
