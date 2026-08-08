const { Client } = require('pg');

const hosts = [
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-us-west-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com',
  'aws-0-eu-west-1.pooler.supabase.com',
  'aws-0-ap-northeast-1.pooler.supabase.com',
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-sa-east-1.pooler.supabase.com',
  'aws-0-ca-central-1.pooler.supabase.com',
  'aws-0-me-central-1.pooler.supabase.com'
];

async function checkAll() {
  for (const host of hosts) {
    const connStr = `postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@${host}:5432/postgres`;
    console.log(`Checking host: ${host}...`);
    const client = new Client({ connectionString: connStr, connectionTimeoutMillis: 3000 });
    try {
      await client.connect();
      console.log(`🎉 BINGO! FOUND THE EXACT MATCH HOST: ${host}`);
      await client.end();
      return host;
    } catch (err) {
      console.log(`  -> ${host} error: [${err.code || 'NO_CODE'}] ${err.message}`);
    }
  }
}

checkAll();
