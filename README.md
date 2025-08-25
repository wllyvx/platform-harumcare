# Platform Harum Care Indonesia

Platform donasi online untuk organisasi nirlaba Harum Care Indonesia.

## Fitur Utama

### 1. Manajemen Kampanye
- Buat, edit, dan hapus kampanye donasi
- Upload gambar kampanye
- Set target donasi dan tanggal berakhir
- Tracking progress donasi

### 2. Manajemen Berita
- Buat, edit, dan hapus berita
- Upload gambar berita
- Kategorisasi berita
- Status draft/published

### 3. **Fitur Baru: Relasi News-Campaign**
- **Berita Terkait Kampanye**: Setiap berita bisa dikaitkan dengan kampanye tertentu
- **Kampanye Terkait Berita**: Setiap kampanye menampilkan berita terkait
- **Cross-Reference**: Navigasi mudah antara berita dan kampanye terkait

#### Cara Kerja Relasi:
1. **Saat Membuat Berita**: Admin bisa memilih kampanye terkait (opsional)
2. **Halaman Detail Kampanye**: Menampilkan berita terkait di bagian bawah
3. **Halaman Detail Berita**: Menampilkan kampanye terkait jika ada
4. **Auto-Update**: Relasi otomatis diupdate saat berita/kampanye dihapus

#### Endpoint API Baru:
- `GET /news/campaign/:campaignId` - Berita berdasarkan kampanye
- `GET /campaigns/:id` - Kampanye dengan berita terkait
- `GET /news/:slug` - Berita dengan kampanye terkait

#### Field Database Baru:
- **News Model**: `campaignId` (ObjectId, ref: Campaign)
- **Campaign Model**: `relatedNews` (Array of ObjectId, ref: News)

### 4. Sistem Donasi
- Form donasi dengan validasi
- Multiple payment methods
- Tracking donatur dan jumlah donasi
- Generate kode unik untuk setiap donasi

### 5. Autentikasi & Authorization
- Login/register user
- Role-based access control (admin/user)
- JWT token authentication

## Instalasi

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm atau yarn

### Setup Backend
```bash
cd backend
npm install
npm run dev
```

### Setup Frontend
```bash
npm install
npm run dev
```

### Environment Variables
Buat file `.env` di root directory:
```env
MONGODB_URI=mongodb://localhost:27017/harumcare
JWT_SECRET=your_jwt_secret_here
PUBLIC_API_URL=http://localhost:3000
```

## Script Utilitas

### Update Relasi News-Campaign
Untuk mengupdate kampanye yang sudah ada dengan berita terkait:
```bash
cd backend
node scripts/updateCampaignNews.js
```

Script ini akan:
1. Mencari berita yang mungkin terkait dengan kampanye berdasarkan:
   - Judul berita mengandung judul kampanye
   - Kategori berita sama dengan kategori kampanye
   - Konten berita mengandung deskripsi kampanye
2. Mengupdate field `relatedNews` di model Campaign
3. Mengupdate field `campaignId` di model News

## Struktur Database

### Campaign Schema
```javascript
{
  title: String,
  description: String,
  imageUrl: String,
  targetAmount: Number,
  currentAmount: Number,
  startDate: Date,
  endDate: Date,
  donorCount: Number,
  organizationName: String,
  organizationLogo: String,
  category: String,
  relatedNews: [ObjectId], // Array of News IDs
  createdAt: Date
}
```

### News Schema
```javascript
{
  title: String,
  slug: String,
  content: String,
  image: String,
  author: ObjectId, // ref: User
  category: String,
  campaignId: ObjectId, // ref: Campaign (optional)
  status: String, // 'draft' or 'published'
  viewCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Campaigns
- `GET /campaigns` - List semua kampanye
- `GET /campaigns/:id` - Detail kampanye dengan berita terkait
- `POST /campaigns` - Buat kampanye baru
- `PUT /campaigns/:id` - Update kampanye
- `DELETE /campaigns/:id` - Hapus kampanye

### News
- `GET /news` - List semua berita
- `GET /news/latest` - Berita terbaru
- `GET /news/campaign/:campaignId` - Berita berdasarkan kampanye
- `GET /news/:slug` - Detail berita dengan kampanye terkait
- `POST /news` - Buat berita baru
- `PUT /news/:id` - Update berita
- `DELETE /news/:id` - Hapus berita

## Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Kontak

Harum Care Indonesia - [@harumcare](https://twitter.com/harumcare) - email@harumcare.com

Project Link: [https://github.com/harumcare/platform](https://github.com/harumcare/platform)