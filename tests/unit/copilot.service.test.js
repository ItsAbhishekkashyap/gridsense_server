jest.mock('@langchain/groq');
jest.mock('../../src/generated/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      systemConfig: { findUnique: jest.fn().mockResolvedValue({ systemName: 'Test System' }) },
      panel: { count: jest.fn().mockResolvedValue(6) },
      alert: { findMany: jest.fn().mockResolvedValue([]) },
    })),
    Prisma: {},
  };
});

const { ChatGroq } = require('@langchain/groq');
const { handleChat } = require('../../src/services/copilot.service');

const { AIMessage } = require('@langchain/core/messages');

describe('Copilot Service - handleChat Unit Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.GROQ_API_KEY = 'test_api_key';
    process.env.HUGGINGFACEHUB_API_KEY = 'test_hf_key';

    ChatGroq.mockImplementation(() => ({
      bindTools: jest.fn().mockReturnThis(),
      invoke: jest.fn().mockResolvedValue(new AIMessage('Hello! I am your SolarTech Copilot.')),
    }));
  });

  it('should return a direct text response if the AI does not call any tools', async () => {
    const response = await handleChat('user_123', [{ role: 'user', content: 'Hi' }]);
    expect(response).toBe('Hello! I am your SolarTech Copilot.');
  });
});
