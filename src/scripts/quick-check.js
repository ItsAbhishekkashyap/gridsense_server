const { Client } = require('pg');

const hosts = [
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com'
];

async function testAll() {
  for (const host of hosts) {
    console.log(`Connecting to ${host}:5432...`);
    const client = new Client({
      connectionString: `postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@${host}:5432/postgres`,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 5000
    });
    try {
      await client.connect();
      console.log(`🎉 SUCCESSFUL CONNECTION TO: ${host}`);
      const res = await client.query('SELECT current_database(), current_user');
      console.log('Result:', res.rows[0]);
      await client.end();
      return host;
    } catch (err) {
      console.log(`❌ ${host} -> ${err.message}`);
    }
  }
}

testAll();
