const { verifyAccessToken } = require('../utils/jwt.utils');
const { sendError } = require('../utils/response.utils');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, 'Access token required', 401);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return sendError(res, 'Access token expired', 401);
    }
    return sendError(res, 'Invalid access token', 401);
  }
}

module.exports = authMiddleware;
