require('dotenv').config();
const mongoose = require('mongoose');
const Donation = require('../models/Donations');
const Campaign = require('../models/Campaign');

async function updateCampaignAmounts() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const donations = await Donation.find({ paymentStatus: 'completed' });

    for (const donation of donations) {
      const campaign = await Campaign.findById(donation.campaignId);
      if (campaign) {
        campaign.currentAmount = (campaign.currentAmount || 0) + donation.amount;
        campaign.donorCount = (campaign.donorCount || 0) + 1;
        await campaign.save();
      }
    }

    console.log('Campaign amounts updated successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error updating campaign amounts:', err);
    process.exit(1);
  }
}

updateCampaignAmounts();