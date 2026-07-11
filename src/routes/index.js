const { Router } = require('express');
const authRoutes = require('./auth.routes');
const panelRoutes = require('./panel.routes');
const dashboardRoutes = require('./dashboard.routes');
const alertRoutes = require('./alert.routes');
const systemRoutes = require('./system.routes');
const paymentRoutes = require('./payment.routes');

const router = Router();

router.use('/auth', authRoutes);
router.use('/panels', panelRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/alerts', alertRoutes);
router.use('/system', systemRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;
