const mongoose = require('mongoose');
const Donation = require('../models/Donations');
const Campaign = require('../models/Campaign');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/harumcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function fixDonationCampaigns() {
  try {
    console.log('Starting to fix donation campaigns...');
    
    // Find all donations with null or invalid campaignId
    const donationsWithInvalidCampaign = await Donation.find({
      $or: [
        { campaignId: null },
        { campaignId: { $exists: false } }
      ]
    });

    console.log(`Found ${donationsWithInvalidCampaign.length} donations with invalid campaignId`);

    if (donationsWithInvalidCampaign.length === 0) {
      console.log('No donations with invalid campaignId found. All donations are valid.');
      return;
    }

    // Get all valid campaigns
    const validCampaigns = await Campaign.find({});
    console.log(`Found ${validCampaigns.length} valid campaigns`);

    if (validCampaigns.length === 0) {
      console.log('No valid campaigns found. Cannot fix donations.');
      return;
    }

    // For each donation with invalid campaignId, assign it to a random valid campaign
    // or delete it if no campaigns exist
    for (const donation of donationsWithInvalidCampaign) {
      console.log(`Fixing donation ${donation._id}...`);
      
      // Assign to first available campaign (you can modify this logic)
      const randomCampaign = validCampaigns[Math.floor(Math.random() * validCampaigns.length)];
      
      donation.campaignId = randomCampaign._id;
      await donation.save();
      
      console.log(`Assigned donation ${donation._id} to campaign ${randomCampaign.title}`);
    }

    console.log('Successfully fixed all donations with invalid campaignId');
    
  } catch (error) {
    console.error('Error fixing donation campaigns:', error);
  } finally {
    mongoose.connection.close();
  }
}

// Run the script
fixDonationCampaigns();
