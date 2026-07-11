async function sendAlertEmail(user, panel, alert) {
  console.log(`[Email] Alert for ${user.email}: ${alert.title} on panel ${panel.name}`);
}

async function sendWelcomeEmail(user) {
  console.log(`[Email] Welcome email to ${user.email}`);
}

module.exports = { sendAlertEmail, sendWelcomeEmail };
