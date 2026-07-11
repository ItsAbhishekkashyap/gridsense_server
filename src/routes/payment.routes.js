const { Router } = require('express');
const { createOrder, verifyPayment, getPaymentHistory, getCurrentSubscription } = require('../controllers/payment.controller');
const authMiddleware = require('../middleware/auth.middleware');
const { apiRateLimit } = require('../middleware/rateLimit.middleware');

const router = Router();

router.use(authMiddleware, apiRateLimit);

router.post('/create-order', createOrder);
router.post('/verify', verifyPayment);
router.get('/history', getPaymentHistory);
router.get('/subscription', getCurrentSubscription);

module.exports = router;
