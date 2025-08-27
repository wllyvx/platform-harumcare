const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import models
const Campaign = require('../models/Campaign');
const News = require('../models/News');
const Donations = require('../models/Donations');

// Konfigurasi database
const MONGODB_URI = process.env.MONGODB_URI;
const NEW_BASE_URL = process.env.PUBLIC_API_URL || 'https://your-backend-name.onrender.com';

async function fixImageUrls() {
  try {
    // Koneksi ke MongoDB
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Terhubung ke MongoDB');

    // Update Campaign images - menggunakan find dan update satu per satu
    const campaigns = await Campaign.find({ imageUrl: { $regex: /^http:\/\/localhost/ } });
    let campaignCount = 0;
    
    for (const campaign of campaigns) {
      if (campaign.imageUrl) {
        campaign.imageUrl = campaign.imageUrl.replace('http://localhost:3000', NEW_BASE_URL);
        await campaign.save();
        campaignCount++;
      }
      
      if (campaign.organizationLogo) {
        campaign.organizationLogo = campaign.organizationLogo.replace('http://localhost:3000', NEW_BASE_URL);
        await campaign.save();
      }
    }
    console.log(`✅ Campaign images updated: ${campaignCount}`);

    // Update News images
    const newsItems = await News.find({ image: { $regex: /^http:\/\/localhost/ } });
    let newsCount = 0;
    
    for (const news of newsItems) {
      if (news.image) {
        news.image = news.image.replace('http://localhost:3000', NEW_BASE_URL);
        await news.save();
        newsCount++;
      }
    }
    console.log(`✅ News images updated: ${newsCount}`);

    // Update Donation proof images
    const donations = await Donations.find({ proofImage: { $regex: /^http:\/\/localhost/ } });
    let donationCount = 0;
    
    for (const donation of donations) {
      if (donation.proofImage) {
        donation.proofImage = donation.proofImage.replace('http://localhost:3000', NEW_BASE_URL);
        await donation.save();
        donationCount++;
      }
    }
    console.log(`✅ Donation proof images updated: ${donationCount}`);

    console.log('\n🎉 Semua URL gambar berhasil diperbaiki!');
    console.log(`📝 Base URL baru: ${NEW_BASE_URL}`);
    console.log(`📊 Total updates: ${campaignCount + newsCount + donationCount}`);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    // Tutup koneksi
    await mongoose.connection.close();
    console.log('🔌 Koneksi database ditutup');
    process.exit(0);
  }
}

// Jalankan script
if (require.main === module) {
  console.log('🚀 Memulai perbaikan URL gambar...');
  console.log(`🔄 Mengubah dari localhost ke: ${NEW_BASE_URL}`);
  console.log('⚠️  Pastikan environment variable PUBLIC_API_URL sudah diset dengan benar!\n');
  
  fixImageUrls();
}

module.exports = fixImageUrls;
