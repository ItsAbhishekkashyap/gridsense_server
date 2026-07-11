const { Router } = require('express');
const { getConfig, updateConfig, getHealth } = require('../controllers/system.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { apiRateLimit } = require('../middleware/rateLimit.middleware');

const router = Router();

router.use(authMiddleware, apiRateLimit);

router.get('/config', getConfig);
router.put('/config', updateConfig);
router.get('/health', getHealth);

module.exports = router;
