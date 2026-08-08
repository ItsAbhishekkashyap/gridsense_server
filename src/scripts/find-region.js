const { Client } = require('pg');

const regions = [
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com',
  'aws-0-eu-west-1.pooler.supabase.com'
];

async function findRegion() {
  for (const host of regions) {
    const connStr = `postgresql://postgres.xakqzbkkxwlfkgpzaipc:Gridsense@123@${host}:5432/postgres`;
    console.log(`Testing region: ${host}...`);
    const client = new Client({ connectionString: connStr, connectionTimeoutMillis: 4000 });
    try {
      await client.connect();
      console.log(`🎉 SUCCESS! Correct pooler host is: ${host}`);
      await client.end();
      return host;
    } catch (err) {
      console.log(`❌ ${host} failed: ${err.message}`);
    }
  }
}

findRegion();
