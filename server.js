
require('dotenv').config();

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cron = require('node-cron');

const routes = require('./src/routes/index');
const { setupSocketHandler } = require('./src/websocket/socket.handler');
const { startSimulator } = require('./src/simulator/panel.simulator');
const { setIo } = require('./src/websocket/io.store');
const { startNotificationService } = require('./src/services/notification.service');
const redis = require('./src/db/redis');
const prisma = require('./src/db/prisma');

const app = express();
const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3001',
    methods: ['GET', 'POST'],
    credentials: true,
  },
  pingTimeout: 60000,
  pingInterval: 25000,
});


app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: false,
}));
app.use(compression());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Health Check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    port: process.env.PORT,
    uptime: process.uptime()
  });
});

app.use('/api', routes);


app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});


app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

setIo(io);
setupSocketHandler(io);

const PORT = parseInt(process.env.PORT) || 5002;


cron.schedule('0 0,12 * * *', async () => {
  console.log('--- [CRON] Clearing AI Analysis Cache for 12-hour Update ---');
  try {
    const keys = await redis.keys('panel:*:analysis');
    if (keys.length > 0) {
      await redis.del(keys);
      console.log(`Successfully cleared ${keys.length} cached analyses.`);
    } else {
      console.log('No cached analyses found to clear.');
    }
  } catch (err) {
    console.error('Cron job error:', err.message);
  }
});

async function start() {
  try {

    try {
      await prisma.$connect();
      console.log('✅ Database connected (Prisma)');
    } catch (dbErr) {
      console.warn('⚠️ Initial database connection warning:', dbErr.message);
      console.log('🔄 Prisma will attempt lazy connection on incoming requests...');
    }

    try {
      await redis.connect();
      console.log('✅ Redis connected');
    } catch (err) {
      console.warn('⚠️ Redis connection warning:', err.message);
    }


    server.listen(PORT, () => {
      console.log(`🚀 GridSense server running on port ${PORT}`);
      console.log(`🌍 Mode: ${process.env.NODE_ENV || 'development'}`);
    });


    setTimeout(async () => {
      try {
        await startSimulator();
        console.log('🛠️ Simulator started');
      } catch (err) {
        console.error('❌ Simulator start error:', err.message);
      }
    }, 3000);

    try {
      startNotificationService();
      console.log('🔔 Notification service active');
    } catch (err) {
      console.error('❌ Notification service error:', err.message);
    }

  } catch (err) {
    console.error('FATAL: Failed to start server:', err);
    process.exit(1);
  }
}


const gracefulShutdown = async () => {
  console.log('Shutting down gracefully...');
  await prisma.$disconnect();
  try {
    await redis.disconnect();
  } catch (e) { }
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

start();