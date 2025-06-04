const Donation = require("../models/Donations");
const Campaign = require("../models/Campaign");
const User = require("../models/Users");

// Create donation
// Create donation
exports.createDonation = async (req, res) => {
  try {
    const { campaignId, amount, message, paymentMethod, isAnonymous, uniqueCode } = req.body;
    const userId = req.user.userId;

    // Validasi input
    if (!campaignId || !amount || !paymentMethod) {
      return res
        .status(400)
        .json({ error: "Campaign ID, amount, dan payment method wajib diisi" });
    }

    if (amount < 1000) {
      return res.status(400).json({ error: "Minimal donasi Rp 1.000" });
    }

    // Check if campaign exists and still active
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign tidak ditemukan" });
    }

    if (new Date() > campaign.endDate) {
      return res.status(400).json({ error: "Campaign sudah berakhir" });
    }

    // Get user info
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User tidak ditemukan" });
    }

    // Create donation with pending status
    const donation = new Donation({
      campaignId,
      userId,
      amount,
      message,
      paymentMethod,
      donorName: isAnonymous ? "Hamba Allah" : user.nama,
      isAnonymous,
      paymentStatus: "pending",
      uniqueCode, // Simpan kode unik jika ada
    });

    await donation.save();

    res.status(201).json({
      message: "Donasi telah dikirim dan menunggu approval dari admin",
      donation: {
        _id: donation._id,
        transactionId: donation.transactionId,
        amount: donation.amount,
        paymentStatus: donation.paymentStatus,
        paymentMethod: donation.paymentMethod,
        uniqueCode: donation.uniqueCode,
      },
    });
  } catch (err) {
    console.error("Error creating donation:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update donation with proof of transfer
exports.updateDonationProof = async (req, res) => {
  try {
    const { donationId } = req.params;
    const { proofOfTransfer } = req.body;

    if (!proofOfTransfer) {
      return res.status(400).json({ error: "Bukti transfer wajib diisi" });
    }

    const donation = await Donation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ error: "Donasi tidak ditemukan" });
    }

    // Pastikan hanya pengguna yang membuat donasi yang dapat mengunggah bukti
    if (donation.userId.toString() !== req.user.userId) {
      return res.status(403).json({ error: "Akses ditolak" });
    }

    donation.proofOfTransfer = proofOfTransfer;
    await donation.save();

    res.json({ message: "Bukti transfer berhasil diunggah", donation });
  } catch (err) {
    console.error("Error updating proof of transfer:", err);
    res.status(500).json({ error: "Server error" });
  }
};
// Get donations by campaign
exports.getDonationsByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const donations = await Donation.find({
      campaignId,
      paymentStatus: "completed",
    })
      .populate("userId", "nama")
      .sort({ completedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Donation.countDocuments({
      campaignId,
      paymentStatus: "completed",
    });

    res.json({
      donations: donations.map((donation) => ({
        _id: donation._id,
        amount: donation.amount,
        message: donation.message,
        donorName: donation.donorName,
        isAnonymous: donation.isAnonymous,
        completedAt: donation.completedAt,
      })),
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (err) {
    console.error("Error getting donations:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get user's donations
exports.getUserDonations = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { page = 1, limit = 10 } = req.query;

    const donations = await Donation.find({ userId })
      .populate("campaignId", "title imageUrl")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Donation.countDocuments({ userId });

    res.json({
      donations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (err) {
    console.error("Error getting user donations:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update payment status (for payment gateway webhook)
exports.updatePaymentStatus = async (req, res) => {
  try {
    const { transactionId, status } = req.body;

    const donation = await Donation.findOne({ transactionId });
    if (!donation) {
      return res.status(404).json({ error: "Donasi tidak ditemukan" });
    }

    const oldStatus = donation.paymentStatus;
    donation.paymentStatus = status;

    await donation.save();

    res.json({ message: "Status pembayaran berhasil diupdate" });
  } catch (err) {
    console.error("Error updating payment status:", err);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getDonationByTransactionId = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const donation = await Donation.findOne({ transactionId })
      .populate("campaignId", "title")
      .populate("userId", "nama email");

    if (!donation) {
      return res.status(404).json({ error: "Donasi tidak ditemukan" });
    }

    // Jika hanya pemilik atau admin yang boleh akses
    if (
      donation.userId._id.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ error: "Akses ditolak" });
    }

    res.json(donation);
  } catch (err) {
    console.error("Error getting donation:", err);
    res.status(500).json({ error: "Server error" });
  }
};

//get all donations
exports.getAllDonations = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, paymentMethod } = req.query;

    let filter = {};
    if (status) filter.paymentStatus = status;
    if (paymentMethod) filter.paymentMethod = paymentMethod;

    const donations = await Donation.find(filter)
      .populate("campaignId", "title imageUrl")
      .populate("userId", "nama email")
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Donation.countDocuments(filter);

    res.json({
      donations,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    });
  } catch (err) {
    console.error("Error getting all donations:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Update donation status (admin only)
exports.updateDonationStatus = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }

    const { id } = req.params;
    const { paymentStatus } = req.body;

    if (!["completed", "failed", "pending"].includes(paymentStatus)) {
      return res.status(400).json({ message: "Invalid payment status" });
    }

    const donation = await Donation.findById(id);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }

    const oldStatus = donation.paymentStatus;
    donation.paymentStatus = paymentStatus;
    if (paymentStatus === "completed") {
      donation.completedAt = new Date();
    }

    await donation.save();

    // Hitung ulang total currentAmount berdasarkan semua donasi completed
    const completedDonations = await Donation.find({
      campaignId: donation.campaignId,
      paymentStatus: 'completed'
    });

    const totalAmount = completedDonations.reduce((sum, d) => sum + d.amount, 0);
    const totalDonors = completedDonations.length;

    // Update campaign dengan nilai yang benar
    await Campaign.findByIdAndUpdate(donation.campaignId, {
      currentAmount: totalAmount,
      donorCount: totalDonors
    });

    console.log("Campaign updated with recalculated values:", {
      campaignId: donation.campaignId,
      totalAmount,
      totalDonors
    });

    res.json({
      message: "Donation status updated successfully",
      donation,
      updatedCampaign: {
        currentAmount: totalAmount,
        donorCount: totalDonors
      }
    });
  } catch (error) {
    console.error("Error updating donation status:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete donation (admin only)
exports.deleteDonation = async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Unauthorized access' });
    }

    const { id } = req.params;
    const donation = await Donation.findById(id);

    if (!donation) {
      return res.status(404).json({ error: 'Donasi tidak ditemukan' });
    }

    // Jika donasi yang dihapus berstatus completed, kurangi currentAmount dan donorCount pada campaign
    if (donation.paymentStatus === 'completed') {
      console.log("Updating Campaign - Decrementing currentAmount and donorCount:", {
        campaignId: donation.campaignId,
        amount: donation.amount,
      });
      await Campaign.findByIdAndUpdate(donation.campaignId, {
        $inc: { currentAmount: -donation.amount, donorCount: -1 },
      });
    }

    await Donation.findByIdAndDelete(id);

    // Hitung ulang total currentAmount berdasarkan semua donasi completed
    const completedDonations = await Donation.find({
      campaignId: donation.campaignId,
      paymentStatus: 'completed'
    });

    const totalAmount = completedDonations.reduce((sum, d) => sum + d.amount, 0);
    const totalDonors = completedDonations.length;

    // Update campaign dengan nilai yang benar
    await Campaign.findByIdAndUpdate(donation.campaignId, {
      currentAmount: totalAmount,
      donorCount: totalDonors
    });

    console.log("Campaign updated with recalculated values:", {
      campaignId: donation.campaignId,
      totalAmount,
      totalDonors
    });

    res.json({ 
      message: 'Donasi berhasil dihapus',
      updatedCampaign: {
        currentAmount: totalAmount,
        donorCount: totalDonors
      }
    });
  } catch (err) {
    console.error('Error deleting donation:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Create donation by admin
exports.createDonationByAdmin = async (req, res) => {
  try {
    // Verify admin role
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Akses ditolak. Hanya admin yang dapat mengakses fitur ini.' });
    }

    const { 
      campaignId, 
      amount, 
      message, 
      paymentMethod, 
      donorName,
      isAnonymous,
      paymentStatus = 'pending' // Default ke pending, tapi admin bisa set langsung ke completed
    } = req.body;

    // Validasi input
    if (!campaignId || !amount || !paymentMethod || !donorName) {
      return res.status(400).json({ 
        error: "Campaign ID, jumlah donasi, metode pembayaran, dan nama donatur wajib diisi" 
      });
    }

    if (amount < 1000) {
      return res.status(400).json({ error: "Minimal donasi Rp 1.000" });
    }

    // Check if campaign exists and still active
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign tidak ditemukan" });
    }

    if (new Date() > campaign.endDate) {
      return res.status(400).json({ error: "Campaign sudah berakhir" });
    }

    // Create donation
    const donation = new Donation({
      campaignId,
      userId: req.user.userId, // Use admin's ID as creator
      amount,
      message,
      paymentMethod,
      donorName: isAnonymous ? "Hamba Allah" : donorName,
      isAnonymous,
      paymentStatus,
      completedAt: paymentStatus === 'completed' ? new Date() : undefined
    });

    await donation.save();

    res.status(201).json({
      message: "Donasi berhasil dibuat",
      donation: {
        _id: donation._id,
        transactionId: donation.transactionId,
        amount: donation.amount,
        paymentStatus: donation.paymentStatus,
        paymentMethod: donation.paymentMethod,
        donorName: donation.donorName,
        isAnonymous: donation.isAnonymous,
        message: donation.message,
        campaignId: donation.campaignId
      },
    });
  } catch (err) {
    console.error("Error creating donation by admin:", err);
    res.status(500).json({ error: "Server error" });
  }
};