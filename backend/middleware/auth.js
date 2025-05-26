const jwt = require('jsonwebtoken');
const User = require('../models/Users');

// Basic authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Access token is required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    
    // Optional: Verify user still exists and is active
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (user.status === 'suspended' || user.status === 'deleted') {
      return res.status(403).json({ error: 'Account is not active' });
    }

    req.user = {
      userId: decoded.userId,
      role: decoded.role,
      username: decoded.username,
      email: decoded.email
    };
    
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ error: 'Invalid token' });
    }
    console.error('Authentication error:', err);
    res.status(500).json({ error: 'Authentication server error' });
  }
};

// Admin access middleware
const restrictToAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Campaign creator access middleware
const restrictToCampaignCreator = (req, res, next) => {
  if (req.user.role !== 'campaign_creator' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Campaign creator access required' });
  }
  next();
};

// Verified campaign creator middleware
const requireVerifiedCampaignCreator = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      return next(); // Admins bypass verification check
    }

    if (req.user.role !== 'campaign_creator') {
      return res.status(403).json({ error: 'Campaign creator access required' });
    }

    const user = await User.findById(req.user.userId);
    if (!user || !user.campaignCreator.isVerified) {
      return res.status(403).json({ 
        error: 'Verified campaign creator status required. Please complete verification process.' 
      });
    }

    next();
  } catch (err) {
    console.error('Verification check error:', err);
    res.status(500).json({ error: 'Server error during verification check' });
  }
};

// Email verification check middleware
const requireEmailVerification = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user || !user.security.isEmailVerified) {
      return res.status(403).json({ 
        error: 'Email verification required. Please verify your email address.' 
      });
    }
    next();
  } catch (err) {
    console.error('Email verification check error:', err);
    res.status(500).json({ error: 'Server error during email verification check' });
  }
};

// Multiple roles middleware
const restrictToRoles = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        error: `Access denied. Required roles: ${roles.join(', ')}` 
      });
    }
    next();
  };
};

// Owner or admin middleware (for accessing own resources)
const requireOwnershipOrAdmin = (req, res, next) => {
  const resourceUserId = req.params.userId || req.body.userId;
  
  if (req.user.role === 'admin' || req.user.userId === resourceUserId) {
    return next();
  }
  
  return res.status(403).json({ 
    error: 'Access denied. You can only access your own resources.' 
  });
};

// Rate limiting middleware (basic implementation)
const createRateLimiter = (windowMs = 15 * 60 * 1000, maxRequests = 100) => {
  const requests = new Map();

  return (req, res, next) => {
    const key = req.ip + req.user?.userId;
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean old entries
    if (requests.has(key)) {
      const userRequests = requests.get(key).filter(time => time > windowStart);
      requests.set(key, userRequests);
    }

    const userRequests = requests.get(key) || [];
    
    if (userRequests.length >= maxRequests) {
      return res.status(429).json({ 
        error: 'Too many requests. Please try again later.',
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }

    userRequests.push(now);
    requests.set(key, userRequests);
    
    next();
  };
};

// Optional: Account lock check
const checkAccountLock = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    if (user && user.isAccountLocked) {
      return res.status(423).json({ 
        error: 'Account is temporarily locked. Please try again later.' 
      });
    }
    next();
  } catch (err) {
    console.error('Account lock check error:', err);
    res.status(500).json({ error: 'Server error during account lock check' });
  }
};

module.exports = {
  authenticateToken,
  restrictToAdmin,
  restrictToCampaignCreator,
  requireVerifiedCampaignCreator,
  requireEmailVerification,
  restrictToRoles,
  requireOwnershipOrAdmin,
  createRateLimiter,
  checkAccountLock
};