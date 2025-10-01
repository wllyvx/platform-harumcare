# Panduan Deployment ke Cloudflare

## Overview
Project ini akan dideploy menggunakan:
- **Frontend (Astro)** → Cloudflare Pages
- **Backend (Express.js)** → Cloudflare Workers

## Prerequisites

### 1. Install Dependencies
```bash
# Install Wrangler CLI
npm install -g wrangler

# Install project dependencies
npm install

# Install backend dependencies
cd backend && npm install
```

### 2. Setup Cloudflare Account
1. Buat akun di [Cloudflare](https://cloudflare.com)
2. Login ke Cloudflare Dashboard
3. Dapatkan API Token untuk deployment

## Step-by-Step Deployment

### Step 1: Setup Backend (Cloudflare Workers)

#### 1.1 Login ke Wrangler
```bash
cd backend
wrangler login
```

#### 1.2 Setup Environment Variables
Di Cloudflare Dashboard → Workers & Pages → harumcare-backend → Settings → Variables:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harumcare
JWT_SECRET=your-super-secret-jwt-key-here
CORS_ORIGIN=https://your-domain.pages.dev
NODE_ENV=production
```

#### 1.3 Deploy Backend
```bash
cd backend
npm run deploy
```

### Step 2: Setup Frontend (Cloudflare Pages)

#### 2.1 Install Cloudflare Adapter
```bash
npm install @astrojs/cloudflare
```

#### 2.2 Update Package.json
```bash
npm install wrangler --save-dev
```

#### 2.3 Setup Environment Variables
Di Cloudflare Dashboard → Pages → your-project → Settings → Environment Variables:

```
PUBLIC_API_URL=https://harumcare-backend.your-subdomain.workers.dev
```

#### 2.4 Deploy Frontend
```bash
# Build project
npm run build

# Deploy ke Cloudflare Pages
wrangler pages deploy dist
```

### Step 3: Setup Custom Domain (Optional)

1. Di Cloudflare Dashboard → Pages → your-project
2. Go to Custom domains
3. Add domain dan setup DNS

## Alternative: Deploy via Git Integration

### 1. Connect Repository
1. Cloudflare Dashboard → Pages → Create a project
2. Connect GitHub repository
3. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (untuk frontend)

### 2. Setup Backend Worker
1. Cloudflare Dashboard → Workers & Pages → Create application
2. Connect repository yang sama
3. Set build settings:
   - **Build command**: `cd backend && npm run build:worker`
   - **Build output directory**: `backend/dist`
   - **Root directory**: `/backend`

## Environment Variables Setup

### Frontend (Cloudflare Pages)
```
PUBLIC_API_URL=https://harumcare-backend.your-subdomain.workers.dev
```

### Backend (Cloudflare Workers)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harumcare
JWT_SECRET=your-super-secret-jwt-key-here
CORS_ORIGIN=https://your-domain.pages.dev
NODE_ENV=production
```

## Troubleshooting

### Common Issues

1. **CORS Error**
   - Pastikan `CORS_ORIGIN` di backend sesuai dengan domain frontend
   - Update di Cloudflare Workers environment variables

2. **API Connection Error**
   - Pastikan `PUBLIC_API_URL` di frontend sesuai dengan URL backend worker
   - Check network tab di browser untuk melihat error detail

3. **Build Error**
   - Pastikan semua dependencies terinstall
   - Check build logs di Cloudflare Dashboard

### Useful Commands

```bash
# Check deployment status
wrangler pages deployment list

# View logs
wrangler tail

# Test locally
wrangler pages dev dist

# Update environment variables
wrangler secret put MONGODB_URI
```

## Cost Estimation

### Cloudflare Pages
- **Free tier**: 500 builds/month, 20,000 requests/month
- **Pro**: $20/month untuk unlimited builds

### Cloudflare Workers
- **Free tier**: 100,000 requests/day
- **Paid**: $5/month untuk 10M requests

## Migration dari Vercel + Render

### 1. Backup Data
- Export database dari MongoDB
- Download file uploads jika ada

### 2. Update Environment Variables
- Update `CORS_ORIGIN` di backend
- Update `PUBLIC_API_URL` di frontend

### 3. Test Deployment
- Test semua functionality
- Check file uploads
- Verify authentication

### 4. Update DNS
- Point domain ke Cloudflare
- Setup SSL certificate

## Monitoring & Analytics

### Cloudflare Analytics
- Monitor traffic di Cloudflare Dashboard
- Check performance metrics
- Monitor error rates

### Custom Monitoring
- Setup health check endpoints
- Monitor database connections
- Track API response times
