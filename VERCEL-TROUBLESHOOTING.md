# Vercel Deployment Troubleshooting

## 🚨 Error: "404 Deployment Not Found"

### **Solusi 1: Konfigurasi Minimal**
Gunakan `vercel.json` minimal:
```json
{
  "framework": "astro"
}
```

### **Solusi 2: Hapus vercel.json**
Coba hapus file `vercel.json` dan biarkan Vercel auto-detect.

### **Solusi 3: Force Redeploy**
1. Buka Vercel dashboard
2. Pilih project
3. Klik "Redeploy" atau "Clear Cache and Redeploy"

### **Solusi 4: Cek Build Logs**
1. Buka Vercel dashboard
2. Pilih deployment yang gagal
3. Buka tab "Functions" atau "Build Logs"
4. Cek apakah ada error saat build

### **Solusi 5: Update Vercel CLI**
```bash
npm i -g vercel@latest
vercel --version
```

### **Solusi 6: Manual Deploy**
```bash
vercel --prod
```

## 🔧 **Konfigurasi yang Sudah Dicoba:**

### **vercel.json Minimal:**
```json
{
  "framework": "astro"
}
```

### **vercel.json Lengkap:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "functions": {
    "dist/server/entry.mjs": {
      "runtime": "@astrojs/vercel"
    }
  }
}
```

## 📋 **Checklist Troubleshooting:**

- [ ] Build local berhasil ✅
- [ ] Astro config sudah benar ✅
- [ ] Adapter Vercel sudah terinstall ✅
- [ ] Output directory: `dist` ✅
- [ ] Output mode: `server` ✅

## 🚀 **Langkah Selanjutnya:**

1. **Push perubahan ke GitHub:**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **Redeploy di Vercel:**
   - Vercel akan auto-deploy
   - Atau manual trigger dari dashboard

3. **Monitor deployment:**
   - Cek build logs
   - Cek function output
   - Cek static files

## 📞 **Jika Masih Error:**

1. **Cek Vercel status**: [vercel-status.com](https://vercel-status.com)
2. **Cek Astro docs**: [docs.astro.build](https://docs.astro.build/en/guides/deploy/vercel/)
3. **Cek Vercel docs**: [vercel.com/docs](https://vercel.com/docs)

## 🔍 **Debug Info:**

- **Framework**: Astro 5.7.13
- **Adapter**: @astrojs/vercel 8.0.0
- **Output**: server
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
