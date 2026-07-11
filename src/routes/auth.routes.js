const { Router } = require('express');
const { signup, login, refresh, logout, getMe } = require('../controllers/auth.controller');
const { validateSignup, validateLogin } = require('../middleware/validate.middleware');
const { authRateLimit } = require('../middleware/rateLimit.middleware');
const authMiddleware = require('../middleware/auth.middleware');

const router = Router();

router.post('/signup', authRateLimit, validateSignup, signup);
router.post('/login', authRateLimit, validateLogin, login);
router.post('/refresh', refresh);
router.post('/logout', logout);
router.get('/me', authMiddleware, getMe);

module.exports = router;
