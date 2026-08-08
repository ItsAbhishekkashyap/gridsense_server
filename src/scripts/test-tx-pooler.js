const { Client } = require('pg');

async function testTransactionPooler() {
  const connStr = 'postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres';
  console.log('Testing Transaction Pooler (port 6543)...');
  const client = new Client({ connectionString: connStr, connectionTimeoutMillis: 5000 });
  try {
    await client.connect();
    console.log('🎉 TRANSACTION POOLER CONNECTED SUCCESSFULLY!');
    const res = await client.query('SELECT NOW()');
    console.log('Query result:', res.rows[0]);
    await client.end();
  } catch (err) {
    console.error('❌ Failed:', err.message);
  }
}

testTransactionPooler();
