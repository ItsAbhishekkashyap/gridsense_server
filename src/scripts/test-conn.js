require('dotenv').config();
const prisma = require('../db/prisma');

async function test() {
  try {
    await prisma.$connect();
    console.log('✅ CONNECTED TO SUPABASE POSTGRESQL SUCCESSFULLY!');
  } catch (err) {
    console.error('❌ Connection error:', err);
  } finally {
    await prisma.$disconnect();
  }
}

test();
