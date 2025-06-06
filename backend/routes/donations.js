const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const { authenticateToken } = require('../middleware/auth');

// Create donation (user only)
router.post('/', authenticateToken, donationController.createDonation);

// Create donation (admin only)
router.post('/admin', authenticateToken, donationController.createDonationByAdmin);

// Get donations by campaign (public)
router.get('/campaign/:campaignId', donationController.getDonationsByCampaign);

// Get user's donations (user only)
router.get('/my-donations', authenticateToken, donationController.getUserDonations);

// Get donation by transaction ID (user/admin)
router.get('/transaction/:transactionId', authenticateToken, donationController.getDonationByTransactionId);

// Get all donations (admin only)
router.get('/', authenticateToken, donationController.getAllDonations);

// Update donation status (admin only)
router.patch('/:id/status', authenticateToken, donationController.updateDonationStatus);

// Delete donation (admin only)
router.delete('/:id', authenticateToken, donationController.deleteDonation);

// Update payment status (for payment gateway webhook)
router.put('/payment-status', donationController.updatePaymentStatus);

// Update proof of transfer (user only)
router.patch('/:donationId/proof', authenticateToken, donationController.updateDonationProof);

module.exports = router;