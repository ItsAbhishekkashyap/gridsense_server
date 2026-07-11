const prisma = require('../db/prisma');

const FAULT_ALERT_MAP = {
  DUST: {
    severity: 'CRITICAL',
    category: 'DUST',
    title: 'Critical Efficiency Drop - Dust/Soiling',
    message: 'Panel efficiency has dropped significantly due to dust accumulation on the surface.',
    actionRequired: 'Perform immediate panel cleaning to restore efficiency.',
  },
  TEMPERATURE_SPIKE: {
    severity: 'WARNING',
    category: 'TEMPERATURE',
    title: 'High Temperature Warning',
    message: 'Panel temperature has exceeded the 65°C warning threshold. High temperatures reduce efficiency and lifespan.',
    actionRequired: 'Check panel mounting clearance and ensure adequate ventilation.',
  },
  PARTIAL_SHADING: {
    severity: 'WARNING',
    category: 'SHADING',
    title: 'Partial Shading Detected',
    message: 'Panel power output has dropped significantly indicating partial shading from nearby objects.',
    actionRequired: 'Inspect for obstructions - trees, buildings or debris causing shadow on panel.',
  },
};

async function checkAndCreateAlert(panelId, reading, _previousReadings, _ratedPower, io) {
  const currentFault = reading.faultType || 'NONE';

  const panel = await prisma.panel.findUnique({
    where: { id: panelId },
    select: { userId: true },
  });

  if (!panel) return;
  const { userId } = panel;

  if (currentFault !== 'NONE' && FAULT_ALERT_MAP[currentFault]) {
    const spec = FAULT_ALERT_MAP[currentFault];

    const existing = await prisma.alert.findFirst({
      where: { panelId, category: spec.category, resolved: false },
    });

    if (!existing) {
      const alert = await prisma.alert.create({
        data: {
          panelId,
          severity: spec.severity,
          category: spec.category,
          title: spec.title,
          message: spec.message,
          actionRequired: spec.actionRequired,
        },
        include: { panel: { select: { id: true, name: true, userId: true } } },
      });

      if (io) {
        io.to(`user-${userId}`).emit('panel:alert', {
          panelId,
          alert,
          action: 'created',
        });
      }
    }

    return;
  }

}

module.exports = { checkAndCreateAlert };
