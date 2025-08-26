# Quick Start Deployment

## 🚀 Deploy dalam 5 menit!

### 1. Push ke GitHub
```bash
git add .
git commit -m "Setup deployment to Vercel + Render"
git push origin main
```

### 2. Deploy Backend ke Render
1. Buka [Render.com](https://render.com)
2. New Web Service → Connect GitHub repo
3. **Name**: `harumcare-backend`
4. **Build Command**: `cd backend && npm install`
5. **Start Command**: `cd backend && npm start`
6. **Environment Variables**:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harumcare
   JWT_SECRET=your-secret-key-here
   CORS_ORIGIN=https://your-vercel-domain.vercel.app
   PUBLIC_API_URL=https://your-backend-name.onrender.com
   ```

### 3. Deploy Frontend ke Vercel
1. Buka [Vercel.com](https://vercel.com)
2. New Project → Import GitHub repo
3. **Framework**: Astro
4. **Environment Variables**:
   ```
   PUBLIC_API_URL=https://your-backend-name.onrender.com
   ```

### 4. Update Environment Variables
Setelah kedua deploy selesai:
1. Update `CORS_ORIGIN` di Render dengan domain Vercel
2. Update `PUBLIC_API_URL` di Render dengan URL Render sendiri

### 5. Test!
- Backend: `https://your-backend-name.onrender.com/health`
- Frontend: `https://your-project-name.vercel.app`

## 📝 Yang Sudah Disiapkan
- ✅ Astro config untuk Vercel
- ✅ Backend CORS untuk deployment terpisah
- ✅ Render.yaml untuk backend
- ✅ Vercel.json untuk frontend
- ✅ Environment variables template
- ✅ Build scripts

## 🔧 Troubleshooting
- **Build error**: Cek `package.json` scripts
- **CORS error**: Update `CORS_ORIGIN` di Render
- **API error**: Cek `PUBLIC_API_URL` di Vercel
- **MongoDB error**: Cek connection string dan whitelist IP

## 📚 Dokumentasi Lengkap
Lihat `DEPLOYMENT.md` untuk panduan detail!
