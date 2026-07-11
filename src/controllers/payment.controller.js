const paymentService = require('../services/payment.service');
const prisma = require('../db/prisma');
const { sendSuccess, sendError } = require('../utils/response.utils');

const VALID_PLANS = ['STARTER', 'PRO', 'ENTERPRISE'];

async function createOrder(req, res) {
  try {
    const { plan } = req.body;

    if (!plan || !VALID_PLANS.includes(plan)) {
      return sendError(res, 'Invalid plan. Must be STARTER, PRO, or ENTERPRISE', 400);
    }

    const order = await paymentService.createOrder(req.user.id, plan);
    return sendSuccess(res, order, 'Order created');
  } catch (err) {
    console.error('CreateOrder error:', err);
    return sendError(res, err.message || 'Failed to create order', 500);
  }
}

async function verifyPayment(req, res) {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return sendError(res, 'Missing payment details', 400);
    }

    const result = await paymentService.verifyAndActivate(req.user.id, {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    });

    return sendSuccess(res, { ...result, message: 'Plan upgraded successfully' }, 'Payment verified');
  } catch (err) {
    console.error('VerifyPayment error:', err);
    return sendError(res, err.message || 'Payment verification failed', 400);
  }
}

async function getPaymentHistory(req, res) {
  try {
    const history = await paymentService.getPaymentHistory(req.user.id);
    return sendSuccess(res, { history });
  } catch (err) {
    console.error('GetPaymentHistory error:', err);
    return sendError(res, 'Failed to get payment history', 500);
  }
}

async function getCurrentSubscription(req, res) {
  try {
    const subscription = await paymentService.getCurrentSubscription(req.user.id);

    let daysRemaining = 0;
    if (subscription) {
      const diff = new Date(subscription.endDate) - new Date();
      daysRemaining = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    }

    return sendSuccess(res, { subscription, daysRemaining });
  } catch (err) {
    console.error('GetCurrentSubscription error:', err);
    return sendError(res, 'Failed to get subscription', 500);
  }
}

module.exports = { createOrder, verifyPayment, getPaymentHistory, getCurrentSubscription };
