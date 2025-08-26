# Deployment Guide - Platform HarumCare

## Overview
Project ini menggunakan deployment terpisah:
- **Frontend (Astro)**: Deploy ke Vercel
- **Backend (Express)**: Deploy ke Render
- **Database**: MongoDB Atlas

## 1. Deploy Backend ke Render

### Langkah-langkah:
1. Push code ke GitHub
2. Buka [Render.com](https://render.com) dan login
3. Klik "New +" → "Web Service"
4. Connect repository GitHub
5. Konfigurasi:
   - **Name**: `harumcare-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

### Environment Variables di Render:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harumcare
JWT_SECRET=your-super-secret-jwt-key
CORS_ORIGIN=https://your-vercel-domain.vercel.app
PUBLIC_API_URL=https://your-backend-name.onrender.com
```

### Catatan:
- Render akan memberikan URL: `https://your-backend-name.onrender.com`
- Backend akan auto-deploy setiap kali ada push ke main branch
- Health check endpoint: `/health`

## 2. Deploy Frontend ke Vercel

### Langkah-langkah:
1. Push code ke GitHub
2. Buka [Vercel.com](https://vercel.com) dan login
3. Klik "New Project"
4. Import repository GitHub
5. Konfigurasi:
   - **Framework Preset**: Astro
   - **Root Directory**: `./` (root project)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Environment Variables di Vercel:
```
PUBLIC_API_URL=https://your-backend-name.onrender.com
```

### Catatan:
- Vercel akan memberikan URL: `https://your-project-name.vercel.app`
- Frontend akan auto-deploy setiap kali ada push ke main branch
- Pastikan `PUBLIC_API_URL` mengarah ke URL backend Render

## 3. Setup MongoDB Atlas

### Langkah-langkah:
1. Buka [MongoDB Atlas](https://cloud.mongodb.com)
2. Buat cluster baru (Free tier)
3. Buat database user dengan password
4. Whitelist IP address (0.0.0.0/0 untuk production)
5. Dapatkan connection string
6. Update `MONGODB_URI` di Render

## 4. Testing Deployment

### Test Backend:
```bash
curl https://your-backend-name.onrender.com/health
```

### Test Frontend:
1. Buka URL Vercel
2. Cek apakah bisa login/register
3. Cek apakah upload file berfungsi
4. Cek apakah campaign dan donation berfungsi

## 5. Troubleshooting

### Backend tidak bisa diakses:
- Cek environment variables di Render
- Cek logs di Render dashboard
- Pastikan MongoDB Atlas bisa diakses

### Frontend error API:
- Cek `PUBLIC_API_URL` di Vercel
- Cek CORS origin di backend
- Cek network tab di browser developer tools

### Upload file error:
- Cek ukuran file (max 5MB)
- Cek MongoDB connection
- Cek GridFS bucket

## 6. Monitoring

### Render:
- Logs real-time
- Metrics CPU/Memory
- Auto-restart jika crash

### Vercel:
- Analytics
- Performance monitoring
- Error tracking

## 7. Update Environment Variables

Setelah deployment berhasil, update:
1. `CORS_ORIGIN` di Render dengan domain Vercel
2. `PUBLIC_API_URL` di Render dengan URL Render sendiri
3. `PUBLIC_API_URL` di Vercel dengan URL Render

## 8. Security Notes

- JWT_SECRET harus unik dan kuat
- MongoDB user harus punya permission minimal
- CORS origin dibatasi hanya domain Vercel
- File upload dibatasi tipe dan ukuran
