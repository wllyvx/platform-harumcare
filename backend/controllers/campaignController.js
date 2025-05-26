const Campaign = require('../models/Campaign');

exports.getAllCampaigns = async (req, res) => {
  try {
    const { page = 1, limit = 10, category, status } = req.query;
    
    let filter = {};
    
    // Filter by category
    if (category) {
      filter.category = category;
    }
    
    // Filter by status
    if (status === 'active') {
      filter.endDate = { $gte: new Date() };
    } else if (status === 'ended') {
      filter.endDate = { $lt: new Date() };
    }
    
    const campaigns = await Campaign.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const total = await Campaign.countDocuments(filter);
    
    res.json({
      campaigns,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      total
    });
  } catch (err) {
    console.error('Error getting campaigns:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getCampaignById = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign tidak ditemukan' });
    }
    
    // Add status based on end date
    const campaignWithStatus = {
      ...campaign.toObject(),
      status: new Date() > campaign.endDate ? 'ended' : 'active',
      progress: campaign.targetAmount > 0 ? (campaign.currentAmount / campaign.targetAmount) * 100 : 0
    };
    
    res.json(campaignWithStatus);
  } catch (err) {
    console.error('Error getting campaign:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createCampaign = async (req, res) => {
  try {
    const {
      title,
      description,
      imageUrl,
      targetAmount,
      startDate,
      endDate,
      organizationName,
      organizationLogo,
      category
    } = req.body;
    
    // Validasi input
    if (!title || !targetAmount || !endDate) {
      return res.status(400).json({ error: 'Title, target amount, dan end date wajib diisi' });
    }
    
    if (targetAmount <= 0) {
      return res.status(400).json({ error: 'Target amount harus lebih dari 0' });
    }
    
    if (new Date(endDate) <= new Date()) {
      return res.status(400).json({ error: 'End date harus di masa depan' });
    }
    
    const campaign = new Campaign({
      title,
      description,
      imageUrl,
      targetAmount,
      startDate: startDate || new Date(),
      endDate,
      organizationName,
      organizationLogo,
      category
    });
    
    await campaign.save();
    res.status(201).json({
      message: 'Campaign berhasil dibuat',
      campaign
    });
  } catch (err) {
    console.error('Error creating campaign:', err);
    res.status(400).json({ error: 'Error membuat campaign' });
  }
};

exports.updateCampaign = async (req, res) => {
  try {
    const campaignId = req.params.id;
    const updateData = req.body;
    
    // Remove fields that shouldn't be updated directly
    delete updateData.currentAmount;
    delete updateData.donorCount;
    delete updateData.createdAt;
    
    // Validate endDate if provided
    if (updateData.endDate && new Date(updateData.endDate) <= new Date()) {
      return res.status(400).json({ error: 'End date harus di masa depan' });
    }
    
    // Validate targetAmount if provided
    if (updateData.targetAmount && updateData.targetAmount <= 0) {
      return res.status(400).json({ error: 'Target amount harus lebih dari 0' });
    }
    
    const campaign = await Campaign.findByIdAndUpdate(
      campaignId,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign tidak ditemukan' });
    }
    
    res.json({
      message: 'Campaign berhasil diupdate',
      campaign
    });
  } catch (err) {
    console.error('Error updating campaign:', err);
    res.status(400).json({ error: 'Error mengupdate campaign' });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign tidak ditemukan' });
    }
    
    // Check if campaign has donations
    if (campaign.currentAmount > 0) {
      return res.status(400).json({ error: 'Campaign tidak dapat dihapus karena sudah ada donasi' });
    }
    
    await Campaign.findByIdAndDelete(req.params.id);
    res.json({ message: 'Campaign berhasil dihapus' });
  } catch (err) {
    console.error('Error deleting campaign:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getCampaignStats = async (req, res) => {
  try {
    const stats = await Campaign.aggregate([
      {
        $group: {
          _id: null,
          totalCampaigns: { $sum: 1 },
          totalTargetAmount: { $sum: '$targetAmount' },
          totalCurrentAmount: { $sum: '$currentAmount' },
          totalDonors: { $sum: '$donorCount' },
          activeCampaigns: {
            $sum: {
              $cond: [{ $gte: ['$endDate', new Date()] }, 1, 0]
            }
          }
        }
      }
    ]);
    
    res.json(stats[0] || {
      totalCampaigns: 0,
      totalTargetAmount: 0,
      totalCurrentAmount: 0,
      totalDonors: 0,
      activeCampaigns: 0
    });
  } catch (err) {
    console.error('Error getting campaign stats:', err);
    res.status(500).json({ error: 'Server error' });
  }
};