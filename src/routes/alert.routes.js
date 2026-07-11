const { Router } = require('express');
const { getAlerts, resolveAlert, unresolveAlert } = require('../controllers/alert.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { apiRateLimit } = require('../middleware/rateLimit.middleware');

const router = Router();

router.use(authMiddleware, apiRateLimit);

router.get('/', getAlerts);
router.patch('/:id/resolve', resolveAlert);
router.patch('/:id/unresolve', unresolveAlert);

module.exports = router;
