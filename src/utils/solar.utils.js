function calculateExpectedPower(ratedPower, irradiance) {
  return ratedPower * (irradiance / 1000);
}

function calculateEfficiencyLoss(temperature) {
  const loss = (temperature - 25) * 0.4;
  return Math.max(0, Math.min(100, 100 - loss));
}

function calculateMoneySaved(energyKwh, tariffRate) {
  return energyKwh * tariffRate;
}

function calculateCO2Offset(energyKwh) {
  return energyKwh * 0.82;
}

function calculateDegradation(installDate, degradationRate = 0.007) {
  const now = new Date();
  const install = new Date(installDate);
  const yearsElapsed = (now - install) / (1000 * 60 * 60 * 24 * 365.25);
  const totalDegradation = yearsElapsed * degradationRate * 100;
  const currentEfficiency = Math.max(70, 100 - totalDegradation);

  return {
    yearsElapsed: Math.round(yearsElapsed * 10) / 10,
    totalDegradationPercent: Math.round(totalDegradation * 100) / 100,
    currentEfficiency: Math.round(currentEfficiency * 100) / 100,
  };
}

function calculateLifespanProjection(currentEfficiency, installDate, warrantyYears = 25) {
  const install = new Date(installDate);
  const yearsSinceInstall = (new Date() - install) / (1000 * 60 * 60 * 24 * 365.25);
  const degradationRate = 0.7;

  const projections = [1, 5, 10, 15, 20, 25].map((year) => {
    const totalYears = yearsSinceInstall + year;
    const projectedEfficiency = Math.max(70, currentEfficiency - totalYears * degradationRate);
    return {
      year,
      efficiency: Math.round(projectedEfficiency * 10) / 10,
      powerOutput: Math.round(projectedEfficiency * 10) / 10,
    };
  });

  return projections;
}

function calculateSystemHealth(panels) {
  if (!panels || panels.length === 0) return 0;

  const weights = { efficiency: 0.4, faults: 0.4, activity: 0.2 };
  let totalScore = 0;

  for (const panel of panels) {
    let panelScore = 100;

    if (panel.currentFault && panel.currentFault !== 'NONE') {
      panelScore -= 30;
    }

    if (!panel.isActive) {
      panelScore -= 50;
    }

    totalScore += panelScore;
  }

  return Math.round(totalScore / panels.length);
}

module.exports = {
  calculateExpectedPower,
  calculateEfficiencyLoss,
  calculateMoneySaved,
  calculateCO2Offset,
  calculateDegradation,
  calculateLifespanProjection,
  calculateSystemHealth,
};
