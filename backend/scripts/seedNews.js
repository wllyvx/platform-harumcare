const mongoose = require('mongoose');
const News = require('../models/News');
const User = require('../models/Users');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample news data
const sampleNews = [
  {
    title: "Harum Care Indonesia Meluncurkan Program Bantuan Pendidikan 2024",
    content: `Harum Care Indonesia dengan bangga mengumumkan peluncuran Program Bantuan Pendidikan 2024 yang bertujuan untuk membantu anak-anak kurang mampu dalam mengakses pendidikan berkualitas.

Program ini akan memberikan bantuan berupa:
- Beasiswa pendidikan untuk 100 siswa SD hingga SMA
- Bantuan buku dan alat tulis
- Program mentoring dan bimbingan belajar
- Dukungan nutrisi untuk siswa

"Kami percaya bahwa pendidikan adalah kunci untuk masa depan yang lebih baik. Melalui program ini, kami berharap dapat membantu anak-anak Indonesia meraih impian mereka," kata Direktur Harum Care Indonesia.

Program akan dimulai pada bulan Januari 2024 dan akan berlangsung selama satu tahun akademik. Pendaftaran akan dibuka pada bulan Desember 2023.

Untuk informasi lebih lanjut, silakan hubungi tim kami di info@harumcare.id atau kunjungi kantor kami di Jakarta.`,
    image: "/images/slide1.jpg",
    category: "pengumuman",
    status: "published"
  },
  {
    title: "Kegiatan Bakti Sosial di Desa Sukamaju",
    content: `Tim Harum Care Indonesia baru-baru ini mengadakan kegiatan bakti sosial di Desa Sukamaju, Jawa Barat. Kegiatan ini merupakan bagian dari program rutin kami untuk memberikan bantuan kepada masyarakat yang membutuhkan.

Kegiatan yang berlangsung selama 3 hari ini meliputi:
- Pemeriksaan kesehatan gratis untuk 200 warga
- Distribusi paket sembako untuk 150 keluarga
- Pelatihan keterampilan untuk ibu-ibu
- Pembagian bantuan pendidikan untuk anak-anak

"Kami sangat berterima kasih kepada Harum Care Indonesia yang telah membantu warga kami. Kegiatan ini sangat bermanfaat," ujar Kepala Desa Sukamaju.

Kegiatan ini didukung oleh berbagai pihak termasuk pemerintah desa, puskesmas setempat, dan relawan dari berbagai kalangan.

Harum Care Indonesia berkomitmen untuk terus melakukan kegiatan serupa di berbagai daerah di Indonesia.`,
    image: "/images/slide2.jpg",
    category: "kegiatan",
    status: "published"
  },
  {
    title: "Update Program Bantuan Kesehatan 2024",
    content: `Harum Care Indonesia mengumumkan update terbaru untuk Program Bantuan Kesehatan 2024. Program ini telah diperluas untuk menjangkau lebih banyak masyarakat yang membutuhkan.

Update program meliputi:
- Penambahan 5 klinik kesehatan mobile
- Kerjasama dengan 10 rumah sakit di berbagai kota
- Program vaksinasi gratis untuk anak-anak
- Pelatihan kader kesehatan desa

"Kesehatan adalah hak dasar setiap manusia. Melalui program ini, kami berharap dapat membantu masyarakat Indonesia mendapatkan akses kesehatan yang lebih baik," kata Koordinator Program Kesehatan.

Program ini akan berjalan sepanjang tahun 2024 dan ditargetkan dapat membantu 10.000 keluarga di seluruh Indonesia.

Untuk informasi detail dan pendaftaran, silakan kunjungi website kami atau hubungi tim kesehatan kami.`,
    image: "/images/slide3.jpg",
    category: "umum",
    status: "published"
  },
  {
    title: "Suksesnya Program Bantuan UMKM Harum Care",
    content: `Program Bantuan UMKM yang diluncurkan Harum Care Indonesia pada awal tahun 2024 telah menunjukkan hasil yang menggembirakan. Program ini berhasil membantu 50 pelaku UMKM di berbagai daerah.

Hasil yang dicapai:
- 50 UMKM berhasil mendapatkan modal usaha
- 30 UMKM berhasil meningkatkan omzet 200%
- 20 UMKM berhasil membuka cabang baru
- 100 tenaga kerja baru terserap

"Program ini tidak hanya memberikan bantuan modal, tetapi juga pelatihan manajemen usaha dan pendampingan berkelanjutan," kata Manager Program UMKM.

Program akan dilanjutkan pada tahun 2025 dengan target membantu 100 UMKM baru. Pendaftaran akan dibuka pada bulan November 2024.

Harum Care Indonesia berkomitmen untuk terus mendukung pertumbuhan ekonomi masyarakat melalui program-program yang berkelanjutan.`,
    image: "/images/empty-image-placeholder.webp",
    category: "kegiatan",
    status: "published"
  },
  {
    title: "Peluncuran Aplikasi Mobile Harum Care",
    content: `Harum Care Indonesia dengan bangga mengumumkan peluncuran aplikasi mobile resmi yang akan memudahkan masyarakat dalam mengakses layanan kami.

Fitur aplikasi meliputi:
- Pendaftaran program bantuan online
- Tracking status bantuan real-time
- Informasi program terbaru
- Donasi online yang aman
- Laporan transparansi

Aplikasi tersedia untuk:
- Android (Google Play Store)
- iOS (App Store)

"Kehadiran aplikasi mobile ini merupakan langkah kami untuk meningkatkan aksesibilitas layanan kami kepada masyarakat," kata CTO Harum Care Indonesia.

Aplikasi telah melalui testing yang ketat dan telah mendapatkan sertifikasi keamanan. Pengguna dapat mengunduh aplikasi secara gratis.

Untuk informasi lebih lanjut, silakan kunjungi website kami atau hubungi tim IT kami.`,
    image: "/images/empty-image-placeholder.webp",
    category: "pengumuman",
    status: "published"
  },
  {
    title: "Kunjungan Kerja ke Program Bantuan di Yogyakarta",
    content: `Tim manajemen Harum Care Indonesia melakukan kunjungan kerja ke Yogyakarta untuk melihat langsung implementasi program bantuan pendidikan dan kesehatan yang sedang berjalan.

Kunjungan selama 2 hari ini meliputi:
- Kunjungan ke 3 sekolah yang menerima bantuan
- Inspeksi 2 klinik kesehatan mobile
- Rapat koordinasi dengan pemerintah daerah
- Pertemuan dengan penerima bantuan

"Kunjungan ini sangat penting untuk memastikan program berjalan sesuai target dan memberikan manfaat maksimal kepada masyarakat," kata Direktur Eksekutif.

Hasil kunjungan menunjukkan bahwa program berjalan dengan baik dan memberikan dampak positif kepada masyarakat Yogyakarta.

Harum Care Indonesia berkomitmen untuk melakukan monitoring rutin terhadap semua program yang sedang berjalan.`,
    image: "/images/empty-image-placeholder.webp",
    category: "kegiatan",
    status: "published"
  }
];

// Function to seed news data
async function seedNews() {
  try {
    // Get first admin user for author
    const adminUser = await User.findOne({ role: 'admin' });
    
    if (!adminUser) {
      console.log('No admin user found. Please create an admin user first.');
      return;
    }

    // Clear existing news
    await News.deleteMany({});
    console.log('Cleared existing news data');

    // Insert sample news
    const newsWithAuthor = sampleNews.map(news => ({
      ...news,
      author: adminUser._id
    }));

    const insertedNews = await News.insertMany(newsWithAuthor);
    console.log(`Successfully inserted ${insertedNews.length} news articles`);

    // Display inserted news
    insertedNews.forEach(news => {
      console.log(`- ${news.title} (${news.category})`);
    });

  } catch (error) {
    console.error('Error seeding news:', error);
  } finally {
    mongoose.connection.close();
    console.log('Database connection closed');
  }
}

// Run the seed function
seedNews();
