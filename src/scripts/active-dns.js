const dns = require('dns');

const candidateHosts = [
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com',
  'aws-0-ap-northeast-1.pooler.supabase.com',
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com',
  'xakqzbkkxwlfkgpzaipc.pooler.supabase.com'
];

candidateHosts.forEach(h => {
  dns.lookup(h, (err, ip) => {
    if (err) console.log(`❌ ${h} -> ${err.message}`);
    else console.log(`✅ ${h} -> IP: ${ip}`);
  });
});
