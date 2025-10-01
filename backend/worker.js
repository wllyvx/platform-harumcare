// Cloudflare Worker untuk Backend API
// Versi sederhana yang kompatibel dengan Cloudflare Workers

// Import dependencies yang diperlukan
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

// Buat instance Hono app
const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', cors({
  origin: ['https://your-domain.pages.dev', 'http://localhost:4321'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Basic routes
app.get('/', (c) => {
  return c.json({
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

app.get('/health', (c) => {
  return c.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: 'cloudflare-workers'
  });
});

// API Routes placeholder
app.get('/api/auth/*', (c) => {
  return c.json({ message: 'Auth endpoint - to be implemented' });
});

app.get('/api/campaigns/*', (c) => {
  return c.json({ message: 'Campaigns endpoint - to be implemented' });
});

app.get('/api/donations/*', (c) => {
  return c.json({ message: 'Donations endpoint - to be implemented' });
});

app.get('/api/upload/*', (c) => {
  return c.json({ message: 'Upload endpoint - to be implemented' });
});

app.get('/api/users/*', (c) => {
  return c.json({ message: 'Users endpoint - to be implemented' });
});

app.get('/api/news/*', (c) => {
  return c.json({ message: 'News endpoint - to be implemented' });
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Route not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error(err);
  return c.json({ error: 'Internal server error' }, 500);
});

// Export untuk Cloudflare Workers
export default app;
