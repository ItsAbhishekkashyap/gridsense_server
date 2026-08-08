require('dotenv').config();
const { PrismaClient } = require('../generated/client');
const prisma = new PrismaClient();

async function createTable() {
  try {
    console.log('Creating HardwareManual table...');
    await prisma.$executeRawUnsafe(`
      CREATE TABLE IF NOT EXISTS "HardwareManual" (
        "id" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "embedding" vector,
        CONSTRAINT "HardwareManual_pkey" PRIMARY KEY ("id")
      );
    `);
    console.log('Successfully created table.');
  } catch (err) {
    console.error('Failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

createTable();
