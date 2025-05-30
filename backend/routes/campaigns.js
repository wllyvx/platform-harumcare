const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');
const donationController = require('../controllers/donationController');
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');

// Public routes
router.get('/', campaignController.getAllCampaigns);
router.get('/stats', campaignController.getCampaignStats);
router.get('/:id', campaignController.getCampaignById);

// Admin only routes
router.post('/', authenticateToken, restrictToAdmin, campaignController.createCampaign);
router.put('/:id', authenticateToken, restrictToAdmin, campaignController.updateCampaign);
router.delete('/:id', authenticateToken, restrictToAdmin, campaignController.deleteCampaign);

// Donation route
router.post('/:id/donate', authenticateToken, donationController.createDonation);

module.exports = router;