const Donation = require('../models/Donations');
const Campaign = require('../models/Campaign');
const User = require('../models/Users');

// Create donation
exports.createDonation = async (req, res) => {
  try {
    const { campaignId, amount, message, paymentMethod, isAnonymous } = req.body;
    const userId = req.user.userId;
    
    // Validasi input
    if (!campaignId || !amount || !paymentMethod) {
      return res.status(400).json({ error: 'Campaign ID, amount, dan payment method wajib diisi' });
    }
    
    if (amount < 1000) {
      return res.status(400).json({ error: 'Minimal donasi Rp 1.000' });
    }
    
    // Check if campaign exists and still active
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ error: 'Campaign tidak ditemukan' });
    }
    
    if (new Date() > campaign.endDate) {
      return res.status(400).json({ error: 'Campaign sudah berakhir' });
    }
    
    // Get user info
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    
    // Create donation
    const donation = new Donation({
      campaignId,
      userId,
      amount,
      message,
      paymentMethod,
      donorName: isAnonymous ? 'Anonim' : user.nama,
      isAnonymous
    });
    
    await donation.save();
    
    res.status(201).json({
      message: 'Donasi berhasil dibuat',
      donation: {
        _id: donation._id,
        transactionId: donation.transactionId,
        amount: donation.amount,
        paymentStatus: donation.paymentStatus,
        paymentMethod: donation.paymentMethod
      }
    });
  } catch (err) {
    console.error('Error creating donation:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get donations by campaign
exports.getDonationsByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    const donations = await Donation.find({ 
      campaignId, 
      paymentStatus: 'completed' 
    })
    .populate('userId', 'nama')
    .sort({ completedAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
    const total = await Donation.countDocuments({ 
      campaignId, 
      paymentStatus: 'completed' 
    });
    
    res.json({
      donations: donations.map(donation => ({
        _id: donation._id,
        amount: donation.amount,
        message: donation.message,
        donorName: donation.donorName,
        isAnonymous: donation.isAnonymous,
        completedAt: donation.completedAt
      })),
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (err) {
    console.error('Error getting donations:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get user's donations
exports.getUserDonations = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { page = 1, limit = 10 } = req.query;
    
    const donations = await Donation.find({ userId })
    .populate('campaignId', 'title imageUrl')
    .sort({ createdAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);
    
    const total = await Donation.countDocuments({ userId });
    
    res.json({
      donations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (err) {
    console.error('Error getting user donations:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Update payment status (for payment gateway webhook)
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { transactionId, status } = req.body;
    
    const donation = await Donation.findOne({ transactionId });
    if (!donation) {
      return res.status(404).json({ error: 'Donasi tidak ditemukan' });
    }
    
    const oldStatus = donation.paymentStatus;
    donation.paymentStatus = status;
    
    if (status === 'completed' && oldStatus !== 'completed') {
      // Update campaign currentAmount and donorCount
      await Campaign.findByIdAndUpdate(donation.campaignId, {
        $inc: { 
          currentAmount: donation.amount,
          donorCount: 1 
        }
      });
    } else if (oldStatus === 'completed' && status === 'failed') {
      // Rollback campaign amounts
      await Campaign.findByIdAndUpdate(donation.campaignId, {
        $inc: { 
          currentAmount: -donation.amount,
          donorCount: -1 
        }
      });
    }
    
    await donation.save();
    
    res.json({ message: 'Status pembayaran berhasil diupdate' });
  } catch (err) {
    console.error('Error updating payment status:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get donation by transaction ID
exports.getDonationByTransactionId = async (req, res) => {
  try {
    const { transactionId } = req.params;
    
    const donation = await Donation.findOne({ transactionId })
    .populate('campaignId', 'title')
    .populate('userId', 'nama email');
    
    if (!donation) {
      return res.status(404).json({ error: 'Donasi tidak ditemukan' });
    }
    
    // Check if user owns this donation or is admin
    if (donation.userId._id.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Akses ditolak' });
    }
    
    res.json(donation);
  } catch (err) {
    console.error('Error getting donation:', err);
    res.status(500).json({ error: 'Server error' });
  }
};