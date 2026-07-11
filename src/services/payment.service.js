const Razorpay = require('razorpay');
const crypto = require('crypto');
const prisma = require('../db/prisma');

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const PLAN_PRICES = {
  STARTER: 49900,
  PRO: 149900,
  ENTERPRISE: 499900,
};

const PLAN_DURATION_DAYS = 30;

async function createOrder(userId, plan) {
  if (!PLAN_PRICES[plan]) {
    throw new Error(`Invalid plan: ${plan}`);
  }

  const amount = PLAN_PRICES[plan];
  const receipt = `rcpt_${userId.slice(0, 8)}_${Date.now()}`;

  const order = await razorpay.orders.create({
    amount,
    currency: 'INR',
    receipt,
  });

  await prisma.paymentHistory.create({
    data: {
      userId,
      razorpayOrderId: order.id,
      amount: amount / 100,
      currency: 'INR',
      plan,
      status: 'PENDING',
    },
  });

  return {
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    key: process.env.RAZORPAY_KEY_ID,
  };
}

async function verifyAndActivate(userId, { razorpayOrderId, razorpayPaymentId, razorpaySignature }) {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest('hex');

  if (expectedSignature !== razorpaySignature) {
    throw new Error('Payment verification failed');
  }

  const paymentRecord = await prisma.paymentHistory.findUnique({
    where: { razorpayOrderId },
  });

  if (!paymentRecord) {
    throw new Error('Payment record not found');
  }

  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + PLAN_DURATION_DAYS);

  const [updatedPayment, subscription, user] = await prisma.$transaction([
    prisma.paymentHistory.update({
      where: { razorpayOrderId },
      data: { razorpayPaymentId, status: 'CAPTURED' },
    }),
    prisma.subscription.create({
      data: {
        userId,
        plan: paymentRecord.plan,
        status: 'ACTIVE',
        startDate,
        endDate,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
        amountPaid: paymentRecord.amount,
      },
    }),
    prisma.user.update({
      where: { id: userId },
      data: {
        currentPlan: paymentRecord.plan,
        plan: paymentRecord.plan,
        planExpiresAt: endDate,
      },
      select: {
        id: true,
        name: true,
        email: true,
        plan: true,
        currentPlan: true,
        planExpiresAt: true,
      },
    }),
  ]);

  await prisma.paymentHistory.update({
    where: { razorpayOrderId },
    data: { subscriptionId: subscription.id },
  });

  return { success: true, subscription, user };
}

async function getPaymentHistory(userId) {
  return prisma.paymentHistory.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

async function getCurrentSubscription(userId) {
  return prisma.subscription.findFirst({
    where: { userId, status: 'ACTIVE' },
    orderBy: { createdAt: 'desc' },
  });
}

async function checkAndExpireSubscriptions() {
  const now = new Date();

  const expired = await prisma.subscription.findMany({
    where: { endDate: { lt: now }, status: 'ACTIVE' },
    select: { id: true, userId: true },
  });

  for (const sub of expired) {
    await prisma.subscription.update({
      where: { id: sub.id },
      data: { status: 'EXPIRED' },
    });

    await prisma.user.update({
      where: { id: sub.userId },
      data: { currentPlan: 'FREE', plan: 'FREE', planExpiresAt: null },
    });

    console.log(`Subscription expired for user: ${sub.userId}`);
  }
}

async function getExpiringSubscriptions() {
  const now = new Date();
  const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  return prisma.subscription.findMany({
    where: { status: 'ACTIVE', endDate: { gte: now, lte: in24h } },
    include: { user: { select: { id: true, name: true, email: true, currentPlan: true } } },
  });
}

module.exports = {
  createOrder,
  verifyAndActivate,
  getPaymentHistory,
  getCurrentSubscription,
  checkAndExpireSubscriptions,
  getExpiringSubscriptions,
};
