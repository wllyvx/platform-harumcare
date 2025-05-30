const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const { authenticateToken } = require('../middleware/auth');

// Create donation (user only)
router.post('/', authenticateToken, donationController.createDonation);

// Get donations by campaign (public)
router.get('/campaign/:campaignId', donationController.getDonationsByCampaign);

// Get user's donations (user only)
router.get('/my-donations', authenticateToken, donationController.getUserDonations);

// Get donation by transaction ID (user/admin)
router.get('/transaction/:transactionId', authenticateToken, donationController.getDonationByTransactionId);

// Get all donations (admin only)
router.get('/', authenticateToken, donationController.getAllDonations);

// Update payment status (for payment gateway webhook)
router.put('/payment-status', donationController.updatePaymentStatus);

module.exports = router;