const Redis = require('ioredis');

const options = {
  retryStrategy: (times) => {
    if (times > 3) return null; // Stop retrying after 3 attempts so server doesn't hang
    return Math.min(times * 200, 1000);
  },
  enableOfflineQueue: false,
  lazyConnect: true,
};

let redis;

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL, options);
} else if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  // Automatically convert Upstash REST credentials to ioredis rediss:// URL
  const host = process.env.UPSTASH_REDIS_REST_URL
    .replace('https://', '')
    .replace('http://', '')
    .replace(/\/$/, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const upstashUrl = `rediss://default:${token}@${host}:6379`;
  redis = new Redis(upstashUrl, options);
} else {
  redis = new Redis({
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6380,
    password: process.env.REDIS_PASSWORD || undefined,
    ...options,
  });
}

redis.on('error', (err) => {
  if (err.code !== 'ECONNREFUSED') {
    console.log('⚠️ Redis connection warning:', err.message);
  }
});

redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});

module.exports = redis;
