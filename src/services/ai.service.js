/* eslint-disable n/no-cjs */
const Groq = require('groq-sdk');
const redis = require('../db/redis');

let groq = null;

function getGroqClient() {
  if (!groq && process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'add_your_groq_key_here') {
    groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }
  return groq;
}

function buildPrompt(panelId, currentReading, last10Readings, ratedPower) {
  const avg = (key) => {
    if (!last10Readings.length) return currentReading[key];
    return last10Readings.reduce((s, r) => s + r[key], 0) / last10Readings.length;
  };

  const hour = new Date().getHours();
  const timeContext = hour >= 6 && hour <= 18 ? 'daytime' : 'nighttime';

  return `Panel ID: ${panelId}
Rated Power: ${ratedPower}W
Time Context: ${timeContext} (hour ${hour})

Current Readings:
- Voltage: ${currentReading.voltage?.toFixed(2)}V
- Current: ${currentReading.current?.toFixed(2)}A
- Power: ${currentReading.power?.toFixed(2)}W
- Temperature: ${currentReading.temperature?.toFixed(1)}°C
- Irradiance: ${currentReading.irradiance?.toFixed(0)} W/m²
- Efficiency: ${currentReading.efficiency?.toFixed(1)}%
- Humidity: ${currentReading.humidity?.toFixed(1)}%

10-Reading Averages:
- Avg Power: ${avg('power')?.toFixed(2)}W
- Avg Temperature: ${avg('temperature')?.toFixed(1)}°C
- Avg Efficiency: ${avg('efficiency')?.toFixed(1)}%

Analyze this data and return ONLY valid JSON (no markdown, no explanation):
{
  "severity": "CRITICAL|WARNING|INFO|NORMAL",
  "category": "DUST|TEMPERATURE|SHADING|INVERTER|WIRING|NORMAL",
  "title": "short title under 60 chars",
  "message": "2-3 sentence professional explanation",
  "actionRequired": "specific actionable step",
  "estimatedDailyLoss": 0,
  "confidence": 85
}`;
}

const defaultAnalysis = {
  severity: 'NORMAL',
  category: 'NORMAL',
  title: 'Panel operating normally',
  message: 'All readings are within expected parameters. No anomalies detected.',
  actionRequired: 'Continue regular monitoring.',
  estimatedDailyLoss: 0,
  confidence: 90,
};

async function analyzePanel(panelId, currentReading, last10Readings, ratedPower) {
  const cacheKey = `panel:${panelId}:analysis`;

  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch { }

  // Short-circuit LLM call for healthy panels (>85% efficiency) to conserve Groq tokens
  if (currentReading && currentReading.efficiency >= 85) {
    const analysis = { ...defaultAnalysis, updatedAt: new Date().toISOString() };
    try { await redis.setex(cacheKey, 3600, JSON.stringify(analysis)); } catch {}
    return analysis;
  }

  const client = getGroqClient();
  if (!client) {
    const analysis = buildFallbackAnalysis(currentReading, ratedPower);
    try {
      await redis.setex(cacheKey, 300, JSON.stringify(analysis));
    } catch { }
    return analysis;
  }

  try {
    const completion = await client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert solar panel monitoring AI. Analyze the panel data and return ONLY a valid JSON object. No markdown, no explanation, just JSON.',
        },
        {
          role: 'user',
          content: buildPrompt(panelId, currentReading, last10Readings, ratedPower),
        },
      ],
      temperature: 0.3,
      max_tokens: 400,
    });

    const raw = completion.choices[0]?.message?.content || '{}';

    let analysis;
    try {
      analysis = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        analysis = JSON.parse(match[0]);
      } else {
        analysis = defaultAnalysis;
      }
    }

    analysis.updatedAt = new Date().toISOString();

    try {

      await redis.setex(cacheKey, 43200, JSON.stringify(analysis));;
    } catch { }

    return analysis;
  } catch (err) {
    console.error('AI analysis error:', err.message);
    const analysis = buildFallbackAnalysis(currentReading, ratedPower);
    try {
      await redis.setex(cacheKey, 300, JSON.stringify(analysis));
    } catch { }
    return analysis;
  }
}

function buildFallbackAnalysis(reading, ratedPower) {
  if (!reading) return { ...defaultAnalysis, updatedAt: new Date().toISOString() };

  if (reading.efficiency < 72) {
    return {
      severity: 'CRITICAL',
      category: 'DUST',
      title: 'Significant efficiency drop detected',
      message: `Panel efficiency has dropped to ${reading.efficiency?.toFixed(1)}%, well below the 72% threshold. This typically indicates dust accumulation or soiling on the panel surface.`,
      actionRequired: 'Schedule immediate panel cleaning. Check for dust, bird droppings, or debris.',
      estimatedDailyLoss: Math.round(((ratedPower * 0.3) / 1000) * 6 * (parseFloat(process.env.TARIFF_RATE) || 8)),
      confidence: 85,
      updatedAt: new Date().toISOString(),
    };
  }

  if (reading.temperature > 65) {
    return {
      severity: 'WARNING',
      category: 'TEMPERATURE',
      title: 'Elevated panel temperature detected',
      message: `Panel temperature is ${reading.temperature?.toFixed(1)}°C, exceeding the 65°C warning threshold. High temperatures reduce efficiency and accelerate degradation.`,
      actionRequired: 'Inspect for restricted airflow beneath panels. Check mounting clearance.',
      estimatedDailyLoss: Math.round(((ratedPower * 0.1) / 1000) * 6 * (parseFloat(process.env.TARIFF_RATE) || 8)),
      confidence: 88,
      updatedAt: new Date().toISOString(),
    };
  }

  const expectedPower = ratedPower * (reading.irradiance / 1000);
  if (reading.irradiance > 100 && reading.power < expectedPower * 0.55) {
    return {
      severity: 'WARNING',
      category: 'SHADING',
      title: 'Partial shading affecting output',
      message: `Power output is ${reading.power?.toFixed(0)}W against expected ${expectedPower?.toFixed(0)}W. This pattern is consistent with partial shading reducing panel performance.`,
      actionRequired: 'Identify and remove shading sources. Check for nearby obstructions.',
      estimatedDailyLoss: Math.round(((expectedPower - reading.power) / 1000) * 6 * (parseFloat(process.env.TARIFF_RATE) || 8)),
      confidence: 82,
      updatedAt: new Date().toISOString(),
    };
  }

  return { ...defaultAnalysis, updatedAt: new Date().toISOString() };
}

module.exports = { analyzePanel };
