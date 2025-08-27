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

    // Update Campaign images
    const campaignUpdates = await Campaign.updateMany(
      { imageUrl: { $regex: /^http:\/\/localhost/ } },
      [
        {
          $set: {
            imageUrl: {
              $replaceAll: {
                input: '$imageUrl',
                find: 'http://localhost:3000',
                replacement: NEW_BASE_URL
              }
            }
          }
        }
      ]
    );
    console.log(`✅ Campaign images updated: ${campaignUpdates.modifiedCount}`);

    // Update News images
    const newsUpdates = await News.updateMany(
      { image: { $regex: /^http:\/\/localhost/ } },
      [
        {
          $set: {
            image: {
              $replaceAll: {
                input: '$image',
                find: 'http://localhost:3000',
                replacement: NEW_BASE_URL
              }
            }
          }
        }
      ]
    );
    console.log(`✅ News images updated: ${newsUpdates.modifiedCount}`);

    // Update Donation proof images
    const donationUpdates = await Donations.updateMany(
      { proofImage: { $regex: /^http:\/\/localhost/ } },
      [
        {
          $set: {
            proofImage: {
              $replaceAll: {
                input: '$proofImage',
                find: 'http://localhost:3000',
                replacement: NEW_BASE_URL
              }
            }
          }
        }
      ]
    );
    console.log(`✅ Donation proof images updated: ${donationUpdates.modifiedCount}`);

    // Update organization logos in campaigns
    const logoUpdates = await Campaign.updateMany(
      { organizationLogo: { $regex: /^http:\/\/localhost/ } },
      [
        {
          $set: {
            organizationLogo: {
              $replaceAll: {
                input: '$organizationLogo',
                find: 'http://localhost:3000',
                replacement: NEW_BASE_URL
              }
            }
          }
        }
      ]
    );
    console.log(`✅ Organization logos updated: ${logoUpdates.modifiedCount}`);

    console.log('\n🎉 Semua URL gambar berhasil diperbaiki!');
    console.log(`📝 Base URL baru: ${NEW_BASE_URL}`);

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
