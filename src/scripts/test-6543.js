const { Client } = require('pg');

async function test6543() {
  const connStr = 'postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres?sslmode=require';
  console.log('Testing Port 6543 (Transaction Pooler)...');
  const client = new Client({ connectionString: connStr, connectionTimeoutMillis: 5000 });
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

test6543();
