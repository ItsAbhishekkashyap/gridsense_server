const { Router } = require('express');
const { getStats, getAlerts, getEnergy } = require('../controllers/dashboard.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { apiRateLimit } = require('../middleware/rateLimit.middleware');

const router = Router();

router.use(authMiddleware, apiRateLimit);

router.get('/stats', getStats);
router.get('/alerts', getAlerts);
router.get('/energy', getEnergy);

module.exports = router;
