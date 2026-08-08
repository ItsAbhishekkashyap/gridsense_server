const net = require('net');

const regions = [
  'aws-0-ap-south-1.pooler.supabase.com',
  'aws-0-ap-northeast-2.pooler.supabase.com',
  'aws-0-us-east-1.pooler.supabase.com',
  'aws-0-eu-central-1.pooler.supabase.com',
  'aws-0-ap-southeast-1.pooler.supabase.com',
  'aws-0-eu-west-1.pooler.supabase.com'
];

function testHost(host, port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(3000);
    socket.on('connect', () => {
      console.log(`✅ CONNECTED TCP: ${host}:${port}`);
      socket.destroy();
      resolve(true);
    });
    socket.on('error', (err) => {
      console.log(`❌ ERROR TCP ${host}:${port} -> ${err.message}`);
      resolve(false);
    });
    socket.on('timeout', () => {
      console.log(`⏰ TIMEOUT TCP ${host}:${port}`);
      socket.destroy();
      resolve(false);
    });
    socket.connect(port, host);
  });
}

async function run() {
  for (const host of regions) {
    await testHost(host, 5432);
    await testHost(host, 6543);
  }
}

run();
