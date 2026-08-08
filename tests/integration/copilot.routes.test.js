const request = require('supertest');
const express = require('express');
const copilotRoutes = require('../../src/routes/copilot.routes');
const { handleChat } = require('../../src/services/copilot.service');

// Mock the authentication middleware to always succeed
jest.mock('../../src/middleware/auth.middleware', () => {
  return (req, res, next) => {
    req.user = { id: 'test_user_123' };
    next();
  };
});

// Mock the Copilot Service
jest.mock('../../src/services/copilot.service', () => ({
  handleChat: jest.fn()
}));

const app = express();
app.use(express.json());
app.use('/api/copilot', copilotRoutes);

describe('Copilot API Integration Tests', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return 400 if messages array is missing', async () => {
    const res = await request(app)
      .post('/api/copilot/chat')
      .send({}); // Missing messages array
    
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe('Messages array is required.');
  });

  it('should return a successful response from the AI service', async () => {
    const mockAiResponse = 'System is operating at 98% efficiency.';
    handleChat.mockResolvedValueOnce(mockAiResponse);

    const res = await request(app)
      .post('/api/copilot/chat')
      .send({
        messages: [{ role: 'user', content: 'How is the system?' }]
      });
    
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe(mockAiResponse);
    expect(handleChat).toHaveBeenCalledWith('test_user_123', [{ role: 'user', content: 'How is the system?' }]);
  });

  it('should return 500 if the AI service throws an error', async () => {
    handleChat.mockRejectedValueOnce(new Error('AI service down'));

    const res = await request(app)
      .post('/api/copilot/chat')
      .send({
        messages: [{ role: 'user', content: 'Hello' }]
      });
    
    expect(res.statusCode).toBe(500);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe('AI service down');
  });
});
