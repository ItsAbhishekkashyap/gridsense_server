const { Client } = require('pg');

const hosts = [
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com'
];

async function checkSSL() {
  for (const host of hosts) {
    const connStr = `postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@${host}:5432/postgres`;
    console.log(`Testing ${host} on 5432...`);
    const client = new Client({
      connectionString: connStr,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 4000
    });
    try {
      await client.connect();
      console.log(`🎉 SUCCESSFUL CONNECTION TO: ${host}:5432`);
      const res = await client.query('SELECT NOW()');
      console.log('QueryResult:', res.rows[0]);
      await client.end();
      return host;
    } catch (err) {
      console.log(`  -> ${host} error: [${err.code || 'NO_CODE'}] ${err.message}`);
    }
  }
}

checkSSL();
