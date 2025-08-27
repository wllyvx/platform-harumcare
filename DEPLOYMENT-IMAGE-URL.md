# 🚀 Panduan Deployment: Perbaikan URL Gambar

## 📋 Masalah
URL gambar yang diupload saat development masih menggunakan `http://localhost:4321` atau `http://localhost:3000`, sehingga tidak bisa diakses saat aplikasi di-deploy ke Vercel + Render.

## 🔧 Solusi yang Sudah Diterapkan

### 1. ✅ Upload Route yang Fleksibel
File `backend/routes/upload.js` sudah dimodifikasi untuk:
- Menggunakan environment variable `PUBLIC_API_URL` jika tersedia
- Mendeteksi otomatis domain production dari request headers
- Fallback ke localhost hanya untuk development

### 2. ✅ Script Perbaikan Database
Script `backend/scripts/fixImageUrlsSimple.js` tersedia untuk memperbaiki URL gambar yang sudah ada di database.

## 🚀 Langkah-langkah Deployment

### Step 1: Set Environment Variables di Render (Backend)

Buat file `.env` di backend dengan konfigurasi berikut:

```bash
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/harumcare?retryWrites=true&w=majority

# Server Configuration
PORT=3000
NODE_ENV=production

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# CORS Configuration
CORS_ORIGIN=https://your-vercel-domain.vercel.app

# Public API URL - PENTING!
PUBLIC_API_URL=https://your-backend-name.onrender.com
```

**⚠️ PENTING:** Ganti `your-backend-name.onrender.com` dengan domain Render yang sebenarnya!

### Step 2: Set Environment Variables di Vercel (Frontend)

Di dashboard Vercel, set environment variable:

```bash
PUBLIC_API_URL=https://your-backend-name.onrender.com
```

### Step 3: Deploy Backend ke Render

1. Push kode ke repository
2. Deploy ke Render
3. Pastikan environment variables sudah diset dengan benar

### Step 4: Jalankan Script Perbaikan Database

Setelah backend berhasil di-deploy, jalankan script perbaikan:

```bash
cd backend
npm run fix:images
```

Atau manual:

```bash
cd backend
node scripts/fixImageUrlsSimple.js
```

### Step 5: Deploy Frontend ke Vercel

1. Push kode ke repository
2. Deploy ke Vercel
3. Pastikan environment variable `PUBLIC_API_URL` sudah diset

## 🔍 Verifikasi

### Cek Backend
```bash
curl https://your-backend-name.onrender.com/health
```

### Cek Upload Gambar
1. Buat campaign/news baru dengan gambar
2. Pastikan URL gambar menggunakan domain Render, bukan localhost

### Cek Gambar Lama
1. Buka campaign/news yang dibuat sebelum deployment
2. Pastikan gambar masih bisa diakses

## 🛠️ Troubleshooting

### Gambar Tidak Muncul
1. Cek apakah `PUBLIC_API_URL` sudah benar di environment variables
2. Jalankan script perbaikan database
3. Cek CORS configuration

### Script Perbaikan Error
1. Pastikan MongoDB connection string benar
2. Pastikan models sudah di-import dengan benar
3. Cek apakah ada permission untuk update database

### Upload Baru Error
1. Cek apakah backend sudah running
2. Cek environment variables
3. Cek CORS configuration

## 📝 Catatan Penting

1. **Environment Variables**: Selalu set `PUBLIC_API_URL` dengan domain production yang benar
2. **Database Backup**: Backup database sebelum menjalankan script perbaikan
3. **Testing**: Test upload gambar baru setelah deployment
4. **Monitoring**: Monitor error logs untuk masalah upload

## 🔄 Update Script Perbaikan

Jika ada perubahan struktur database atau field baru, update script `fixImageUrlsSimple.js` sesuai kebutuhan.

## 📞 Support

Jika masih mengalami masalah:
1. Cek logs di Render dashboard
2. Cek logs di Vercel dashboard
3. Verifikasi environment variables
4. Test API endpoints secara manual
