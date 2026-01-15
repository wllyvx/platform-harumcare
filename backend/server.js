const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { authenticateToken, restrictToAdmin } = require('./middleware/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration untuk deployment terpisah
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:4321',
  credentials: true,
  optionsSuccessStatus: 200
};

//middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// koneksi ke mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Koneksi mongoDB error', err));

// rute dasar
app.get('/', (req, res) => {
  res.json({
    message: 'Backend for Donation Platform is running',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      campaigns: '/api/campaigns',
      donations: '/api/donations',
      upload: '/api/upload',
      users: '/api/users',
      news: '/api/news',
      blog: '/api/blog'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// autentikasi routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// upload routes
const uploadRoutes = require('./routes/upload');
app.use('/api/upload', uploadRoutes);

// campaign routes
const campaignRoutes = require('./routes/campaigns');
app.use('/api/campaigns', campaignRoutes);

// donation routes
const donationRoutes = require('./routes/donations');
app.use('/api/donations', donationRoutes);

// users routes
const userRoutes = require('./routes/users');
app.use('/api/users', authenticateToken, restrictToAdmin, userRoutes);

// news routes
const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes); // Adjust middleware as needed, e.g., authenticateToken, restrictToAdmin for POST/PUT/DELETE

// blog routes
const blogRoutes = require('./routes/blog');
app.use('/api/blog', blogRoutes); // Adjust middleware as needed, e.g., authenticateToken, restrictToAdmin for POST/PUT/DELETE

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// jalanin server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  // console.log('Available routes:');
  // console.log('- GET  /api/campaigns');
  // console.log('- POST /api/campaigns (admin only)');
  // console.log('- POST /api/auth/register');
  // console.log('- POST /api/auth/login');
  // console.log('- POST /api/donations (user only)');
  // console.log('- POST /api/upload (authenticated)');
});