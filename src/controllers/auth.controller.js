const prisma = require('../db/prisma');
const { hashPassword, comparePassword } = require('../utils/hash.utils');
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } = require('../utils/jwt.utils');
const { sendSuccess, sendError } = require('../utils/response.utils');
const { createDemoPanels } = require('../utils/seed.utils');
const { addUserToSimulator, startSimulator } = require('../simulator/panel.simulator');

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return sendError(res, 'Email already in use', 409);
    }

    const passwordHash = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        passwordHash,
        systemConfig: {
          create: {
            systemName: `${name.trim()}'s Solar System`,
            location: 'Lucknow, UP, India',
          },
        },
      },
      select: { id: true, name: true, email: true, plan: true },
    });

    await createDemoPanels(user.id, prisma);

    addUserToSimulator(user.id).then(() => {
      startSimulator();
    }).catch((err) => {
      console.error('[Auth] Simulator start error after signup:', err.message);
    });

    const accessToken = generateAccessToken({ id: user.id, email: user.email, plan: user.plan });
    const refreshToken = generateRefreshToken({ id: user.id });

    await prisma.session.create({
      data: {
        userId: user.id,
        token: refreshToken,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
    return sendSuccess(res, { user, accessToken }, 'Account created successfully', 201);
  } catch (err) {
    console.error('Signup error:', err);
    return sendError(res, 'Failed to create account', 500);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase().trim() },
      select: { id: true, name: true, email: true, plan: true, passwordHash: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return sendError(res, 'Invalid credentials', 401);
    }

    const valid = await comparePassword(password, user.passwordHash);
    if (!valid) {
      return sendError(res, 'Invalid credentials', 401);
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    addUserToSimulator(user.id).then(() => {
      startSimulator();
    }).catch(() => {});

    const accessToken = generateAccessToken({ id: user.id, email: user.email, plan: user.plan });
    const refreshToken = generateRefreshToken({ id: user.id });

    await prisma.session.create({
      data: {
        userId: user.id,
        token: refreshToken,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    const { passwordHash: _, ...userData } = user;
    res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
    return sendSuccess(res, { user: userData, accessToken }, 'Login successful');
  } catch (err) {
    console.error('Login error:', err);
    return sendError(res, 'Login failed', 500);
  }
}

async function refresh(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token) {
      return sendError(res, 'Refresh token required', 401);
    }

    let decoded;
    try {
      decoded = verifyRefreshToken(token);
    } catch {
      return sendError(res, 'Invalid refresh token', 401);
    }

    const session = await prisma.session.findUnique({ where: { token } });
    if (!session || session.expiresAt < new Date()) {
      res.clearCookie('refreshToken');
      return sendError(res, 'Session expired', 401);
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, plan: true, isActive: true },
    });

    if (!user || !user.isActive) {
      return sendError(res, 'User not found', 401);
    }

    const newAccessToken = generateAccessToken({ id: user.id, email: user.email, plan: user.plan });
    const newRefreshToken = generateRefreshToken({ id: user.id });

    await prisma.session.update({
      where: { id: session.id },
      data: {
        token: newRefreshToken,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    res.cookie('refreshToken', newRefreshToken, COOKIE_OPTIONS);
    return sendSuccess(res, { accessToken: newAccessToken }, 'Token refreshed');
  } catch (err) {
    console.error('Refresh error:', err);
    return sendError(res, 'Failed to refresh token', 500);
  }
}

async function logout(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (token) {
      await prisma.session.deleteMany({ where: { token } });
    }
    res.clearCookie('refreshToken');
    return sendSuccess(res, null, 'Logged out successfully');
  } catch (err) {
    console.error('Logout error:', err);
    return sendError(res, 'Logout failed', 500);
  }
}

async function getMe(req, res) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        plan: true,
        isVerified: true,
        lastLoginAt: true,
        createdAt: true,
        systemConfig: true,
      },
    });

    if (!user) {
      return sendError(res, 'User not found', 404);
    }

    return sendSuccess(res, { user });
  } catch (err) {
    console.error('GetMe error:', err);
    return sendError(res, 'Failed to get user', 500);
  }
}

module.exports = { signup, login, refresh, logout, getMe };
