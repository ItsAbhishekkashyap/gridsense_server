const DEMO_PANEL_SPECS = [
  { name: 'Panel Alpha',   location: 'Roof Section A', ratedPower: 300, installDate: new Date('2022-01-15') },
  { name: 'Panel Beta',    location: 'Roof Section A', ratedPower: 300, installDate: new Date('2022-01-15') },
  { name: 'Panel Gamma',   location: 'Roof Section B', ratedPower: 300, installDate: new Date('2022-03-10') },
  { name: 'Panel Delta',   location: 'Roof Section B', ratedPower: 300, installDate: new Date('2022-03-10') },
  { name: 'Panel Epsilon', location: 'Roof Section C', ratedPower: 300, installDate: new Date('2022-06-20') },
  { name: 'Panel Zeta',    location: 'Roof Section C', ratedPower: 300, installDate: new Date('2022-06-20') },
];

async function createDemoPanels(userId, prisma) {
  const existing = await prisma.panel.findMany({
    where: { userId, isActive: true },
    orderBy: { createdAt: 'asc' },
  });

  if (existing.length >= 6) return existing;

  const panels = [];
  for (const spec of DEMO_PANEL_SPECS) {
    const panel = await prisma.panel.create({
      data: {
        userId,
        name: spec.name,
        location: spec.location,
        ratedPower: spec.ratedPower,
        installDate: spec.installDate,
        warrantyYears: 25,
      },
    });
    panels.push(panel);
  }

  await prisma.systemConfig.upsert({
    where: { userId },
    update: {},
    create: {
      userId,
      systemName: 'My Solar System',
      location: 'Lucknow, UP, India',
      tariffRate: 8.0,
      totalCapacity: 1.8,
    },
  });

  console.log(`[Seed] Created 6 demo panels for user ${userId}`);
  return panels;
}

module.exports = { createDemoPanels, DEMO_PANEL_SPECS };
