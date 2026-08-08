const dns = require('dns');

const hosts = [
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com',
  'db.xakqzbkkxwlfkgpzaipc.supabase.co'
];

hosts.forEach(h => {
  dns.lookup(h, { all: true }, (err, addresses) => {
    if (err) console.error(h, 'FAIL:', err.message);
    else console.log(h, 'OK:', addresses);
  });
});
