const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT) || 6380,
  retryStrategy: (times) => {
    if (times > 3) return null;
    return Math.min(times * 200, 1000);
  },
  enableOfflineQueue: false,
  lazyConnect: true,
});

redis.on('error', (err) => {
  if (err.code !== 'ECONNREFUSED') {
    console.error('Redis error:', err.message);
  }
});

redis.on('connect', () => {
  console.log('Redis connected on port', process.env.REDIS_PORT || 6380);
});

module.exports = redis;
