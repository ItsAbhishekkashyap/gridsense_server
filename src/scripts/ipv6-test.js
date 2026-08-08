const dns = require('dns');

dns.resolve6('db.xakqzbkkxwlfkgpzaipc.supabase.co', (err, addresses) => {
  if (err) console.error('IPv6 Lookup Failed:', err.message);
  else console.log('🎉 DIRECT IPV6 ADDRESSES FOUND:', addresses);
});
