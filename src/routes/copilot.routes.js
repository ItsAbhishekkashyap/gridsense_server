const { Router } = require('express');
const { handleChat } = require('../services/copilot.service');
const authenticate = require('../middleware/auth.middleware');

const router = Router();

// Endpoint: POST /api/copilot/chat
// We apply the authenticate middleware so `req.user.id` is available.
router.post('/chat', authenticate, async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ success: false, message: 'Messages array is required.' });
    }

    const userId = req.user.id;
    
    const aiResponse = await handleChat(userId, messages);
    
    res.json({ success: true, message: aiResponse });

  } catch (error) {
    console.error('Copilot Route Error:', error);
    res.status(500).json({ success: false, message: error.message || 'Internal server error.' });
  }
});

module.exports = router;
