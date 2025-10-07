const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  console.log('Auth middleware - Token received:', token ? 'Yes' : 'No');
  console.log('Auth middleware - JWT Secret exists:', process.env.JWT_SECRET ? 'Yes' : 'No');
  
  if (!token) {
    console.log('Auth middleware - No token provided');
    return res.status(401).json({ error: 'Access denied' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    console.log('Auth middleware - Token decoded successfully for user:', decoded.userId);
    req.user = decoded;
    next();
  } catch (err) {
    console.log('Auth middleware - Token verification failed:', err.message);
    res.status(403).json({ error: 'Invalid token' });
  }
};

const restrictToAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

module.exports = { authenticateToken, restrictToAdmin };