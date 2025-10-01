// Adapter untuk mengubah Express.js app menjadi Cloudflare Worker
import express from 'express';
import { createMiddleware } from '@hono/express-to-hono';

// Import semua route yang ada
import authRoutes from './routes/auth.js';
import uploadRoutes from './routes/upload.js';
import campaignRoutes from './routes/campaigns.js';
import donationRoutes from './routes/donations.js';
import userRoutes from './routes/users.js';
import newsRoutes from './routes/news.js';

// Import middleware
import { authenticateToken, restrictToAdmin } from './middleware/auth.js';

// Import dependencies
import mongoose from 'mongoose';
import cors from 'cors';

// Setup Express app
const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'https://your-domain.pages.dev',
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error', err));

// Routes
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
      news: '/api/news'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/users', authenticateToken, restrictToAdmin, userRoutes);
app.use('/api/news', newsRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Export untuk Cloudflare Workers
export default app;
