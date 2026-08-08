const { Client } = require('pg');

async function test6543SSL() {
  const connStr = 'postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres';
  console.log('Testing Port 6543 with ssl: { rejectUnauthorized: false }...');
  const client = new Client({
    connectionString: connStr,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000
  });
  try {
    await client.connect();
    console.log('🎉 TRANSACTION POOLER PORT 6543 CONNECTED SUCCESSFULLY!');
    const res = await client.query('SELECT NOW()');
    console.log('QueryResult:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('❌ Port 6543 error:', err.message);
  }
}

test6543SSL();
