const faultState = new Map();

const FAULT_SCHEDULES_BY_INDEX = [
  null,
  { type: 'DUST',              intervalMs: 8  * 60 * 1000, durationMs: 5 * 60 * 1000 },
  { type: 'TEMPERATURE_SPIKE', intervalMs: 10 * 60 * 1000, durationMs: 4 * 60 * 1000 },
  { type: 'PARTIAL_SHADING',   intervalMs: 12 * 60 * 1000, durationMs: 6 * 60 * 1000 },
  null,
  null,
];

function initFaultState(panelId, panelIndex) {
  const schedule = FAULT_SCHEDULES_BY_INDEX[panelIndex];
  if (!schedule) return;

  faultState.set(panelId, {
    active: false,
    lastToggle: Date.now(),
    schedule,
  });
}

function applyFault(reading, panelId) {
  const state = faultState.get(panelId);
  if (!state) return { ...reading, faultType: 'NONE' };

  const now = Date.now();
  const elapsed = now - state.lastToggle;
  const { schedule } = state;

  if (!state.active && elapsed >= schedule.intervalMs) {
    state.active = true;
    state.lastToggle = now;
  } else if (state.active && elapsed >= schedule.durationMs) {
    state.active = false;
    state.lastToggle = now;
  }

  if (!state.active) return { ...reading, faultType: 'NONE' };

  const m = { ...reading };

  switch (schedule.type) {
    case 'DUST':
      m.power      *= 0.67;
      m.current    *= 0.67;
      m.efficiency *= 0.67;
      m.faultType   = 'DUST';
      break;

    case 'TEMPERATURE_SPIKE':
      m.temperature += 28;
      m.efficiency   = Math.max(0, m.efficiency - 15);
      m.faultType    = 'TEMPERATURE_SPIKE';
      break;

    case 'PARTIAL_SHADING':
      m.power      *= 0.55;
      m.current    *= 0.55;
      m.efficiency *= 0.55;
      m.faultType   = 'PARTIAL_SHADING';
      break;

    default:
      m.faultType = 'NONE';
  }

  return m;
}

function getCurrentFault(panelId) {
  const state = faultState.get(panelId);
  if (!state || !state.active) return 'NONE';
  return state.schedule.type;
}

module.exports = { initFaultState, applyFault, getCurrentFault };
