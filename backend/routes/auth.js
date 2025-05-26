const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/Users');
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');

// Register - Public endpoint for donors and campaign creators
router.post('/register', async (req, res) => {
  try {
    const { 
      username, 
      email, 
      password, 
      role = 'donor',
      firstName,
      lastName,
      phone,
      organizationName,
      organizationType
    } = req.body;

    // Validation
    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).json({ 
        error: 'Username, email, password, first name, and last name are required' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password must be at least 6 characters long' 
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({ 
        error: 'User with this email or username already exists' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate email verification token
    const emailVerificationToken = crypto.randomBytes(32).toString('hex');

    // Create user object
    const userData = {
      username,
      email,
      password: hashedPassword,
      role,
      profile: {
        firstName,
        lastName,
        phone: phone || undefined
      },
      security: {
        emailVerificationToken,
        emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      },
      status: 'pending_verification'
    };

    // Add campaign creator specific fields
    if (role === 'campaign_creator') {
      userData.campaignCreator = {
        organizationName: organizationName || undefined,
        organizationType: organizationType || 'individual',
        isVerified: false
      };
    }

    const user = new User(userData);
    await user.save();

    // TODO: Send verification email here
    // await sendVerificationEmail(user.email, emailVerificationToken);

    res.status(201).json({ 
      message: 'User registered successfully. Please check your email to verify your account.',
      userId: user._id
    });

  } catch (err) {
    console.error('Registration error:', err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Admin-only register endpoint
router.post('/admin/register', authenticateToken, restrictToAdmin, async (req, res) => {
  try {
    const { username, email, password, role, firstName, lastName } = req.body;

    if (!username || !email || !password || !firstName || !lastName) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'donor',
      profile: { firstName, lastName },
      status: 'active', // Admin-created users are automatically active
      security: { isEmailVerified: true }
    });

    await user.save();
    res.status(201).json({ 
      message: 'User created successfully by admin',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        fullName: user.profile.fullName
      }
    });
  } catch (err) {
    console.error('Admin registration error:', err);
    res.status(400).json({ error: 'Error creating user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body; // login can be username or email
    
    if (!login || !password) {
      return res.status(400).json({ error: 'Login and password are required' });
    }

    // Find user by email or username
    const user = await User.findOne({
      $or: [
        { email: login.toLowerCase() },
        { username: login }
      ]
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if account is locked
    if (user.isAccountLocked) {
      return res.status(423).json({ 
        error: 'Account is temporarily locked due to too many failed login attempts. Please try again later.' 
      });
    }

    // Check if account is suspended or deleted
    if (user.status === 'suspended') {
      return res.status(403).json({ error: 'Account is suspended. Please contact support.' });
    }

    if (user.status === 'deleted') {
      return res.status(403).json({ error: 'Account not found.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      await user.incrementLoginAttempts();
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Update login info
    user.lastLogin = new Date();
    user.ipAddress = req.ip;
    user.userAgent = req.get('User-Agent');
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        role: user.role,
        username: user.username,
        email: user.email
      },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '24h' }
    );

    // Return success response
    res.json({ 
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        fullName: user.profile.fullName,
        avatar: user.profile.avatar,
        status: user.status,
        isEmailVerified: user.security.isEmailVerified,
        lastLogin: user.lastLogin
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Email verification
router.post('/verify-email', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: 'Verification token is required' });
    }

    const user = await User.findOne({
      'security.emailVerificationToken': token,
      'security.emailVerificationExpires': { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification token' });
    }

    user.security.isEmailVerified = true;
    user.security.emailVerificationToken = undefined;
    user.security.emailVerificationExpires = undefined;
    user.status = 'active';

    await user.save();

    res.json({ message: 'Email verified successfully' });
  } catch (err) {
    console.error('Email verification error:', err);
    res.status(500).json({ error: 'Server error during email verification' });
  }
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      // Don't reveal if email exists or not for security
      return res.json({ message: 'If the email exists, password reset instructions have been sent.' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.security.passwordResetToken = resetToken;
    user.security.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour

    await user.save();

    // TODO: Send password reset email
    // await sendPasswordResetEmail(user.email, resetToken);

    res.json({ message: 'If the email exists, password reset instructions have been sent.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Reset password
router.post('/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Token and new password are required' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const user = await User.findOne({
      'security.passwordResetToken': token,
      'security.passwordResetExpires': { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    
    user.password = hashedPassword;
    user.security.passwordResetToken = undefined;
    user.security.passwordResetExpires = undefined;
    user.security.loginAttempts = 0;
    user.security.lockUntil = undefined;

    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get current user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId)
      .select('-password -security.passwordResetToken -security.emailVerificationToken')
      .populate('campaignCreator.campaignsCreated', 'title status createdAt');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (err) {
    console.error('Get profile error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const updates = req.body;
    const allowedUpdates = [
      'profile.firstName', 'profile.lastName', 'profile.bio', 'profile.phone',
      'profile.dateOfBirth', 'profile.gender', 'address', 'socialLinks',
      'preferences'
    ];

    // Filter allowed updates
    const filteredUpdates = {};
    Object.keys(updates).forEach(key => {
      if (allowedUpdates.some(allowed => key.startsWith(allowed.split('.')[0]))) {
        filteredUpdates[key] = updates[key];
      }
    });

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: filteredUpdates },
      { new: true, runValidators: true }
    ).select('-password -security.passwordResetToken -security.emailVerificationToken');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully', user });
  } catch (err) {
    console.error('Update profile error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Logout (optional - mainly for token blacklisting if implemented)
router.post('/logout', authenticateToken, async (req, res) => {
  try {
    // If you implement token blacklisting, add the token to blacklist here
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;