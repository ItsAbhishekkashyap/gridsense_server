const { getIo } = require('../websocket/io.store');
const { checkAndExpireSubscriptions, getExpiringSubscriptions } = require('./payment.service');

async function checkExpiringSubscriptions() {
  try {
    await checkAndExpireSubscriptions();

    const expiring = await getExpiringSubscriptions();
    const io = getIo();

    if (io && expiring.length > 0) {
      for (const sub of expiring) {
        const hoursRemaining = Math.ceil(
          (new Date(sub.endDate) - new Date()) / (1000 * 60 * 60)
        );

        io.to(`user-${sub.user.id}`).emit('subscription:expiring', {
          message: 'Your plan expires tomorrow. Renew to continue monitoring.',
          plan: sub.user.currentPlan,
          expiresAt: sub.endDate,
          hoursRemaining,
        });
      }
    }
  } catch (err) {
    console.error('Notification service error:', err.message);
  }
}

function startNotificationService() {
  checkExpiringSubscriptions();
  setInterval(checkExpiringSubscriptions, 60 * 60 * 1000);
  console.log('Notification service started');
}

module.exports = { startNotificationService };
