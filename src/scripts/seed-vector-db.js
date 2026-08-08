require('dotenv').config();
const { PrismaClient, Prisma } = require('../generated/client');
const { HuggingFaceInferenceEmbeddings } = require('@langchain/community/embeddings/hf');
const { PrismaVectorStore } = require('@langchain/community/vectorstores/prisma');


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
const DUMMY_MANUAL = `
GridSense Solar Inverter 5000X - Technical Troubleshooting Manual

Error Code E01: Grid Overvoltage. 
The grid voltage exceeds the maximum allowed limit (usually > 253V). 
Action Required: Check the local grid voltage. If persistent, adjust the inverter's grid parameters according to local regulations.

Error Code E02: Inverter Overheating.
The internal temperature of the inverter has exceeded 85°C.
Action Required: Check if the cooling fans are blocked or dusty. Ensure at least 30cm clearance around the inverter. Clean the heatsink.

Error Code E03: DC Arc Fault.
An electrical arc was detected on the DC side (solar panels to inverter).
Action Required: Immediately shut down the DC isolator switch. Inspect all MC4 connectors and wiring for damage, water ingress, or loose connections.

Maintenance Guide:
- Clean the solar panels every 3-6 months using deionized water to prevent dust accumulation.
- Visually inspect inverter cables annually.
- The default admin password for the local web interface is 'admin123'.
`;

async function main() {
  console.log('🌱 Starting Vector Database Seed...');

  if (!process.env.HUGGINGFACEHUB_API_KEY) {
    console.error('❌ HUGGINGFACEHUB_API_KEY is missing from .env');
    process.exit(1);
  }

  // 1. Initialize Embeddings Model (Using free HuggingFace model)
  const embeddings = new HuggingFaceInferenceEmbeddings({
    apiKey: process.env.HUGGINGFACEHUB_API_KEY,
    model: 'sentence-transformers/all-MiniLM-L6-v2', // Fast, 384 dimensions
  });

  // 2. Initialize Vector Store
  const vectorStore = PrismaVectorStore.withModel(prisma).create(embeddings, {
    prisma: Prisma,
    tableName: 'HardwareManual',
    vectorColumnName: 'embedding',
    columns: {
      id: PrismaVectorStore.IdColumn,
      content: PrismaVectorStore.ContentColumn,
    },
  });

  // 3. Split the text into logical chunks
  console.log('✂️ Splitting manual into chunks...');
  const chunks = DUMMY_MANUAL.split('\n\n').map(c => c.trim()).filter(c => c.length > 0);
  console.log(`Created ${chunks.length} document chunks.`);

  // 4. Delete existing vectors to prevent duplicates on re-run
  console.log('🗑️ Clearing old manuals...');
  await prisma.hardwareManual.deleteMany({});

  // 5. Generate vectors and insert into PostgreSQL
  console.log('🧠 Generating embeddings and saving to PostgreSQL (this may take a moment)...');
  await vectorStore.addModels(
    await prisma.$transaction(
      chunks.map((content) =>
        prisma.hardwareManual.create({
          data: { content },
        })
      )
    )
  );

  console.log('✅ Successfully seeded Vector DB with hardware manuals!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
