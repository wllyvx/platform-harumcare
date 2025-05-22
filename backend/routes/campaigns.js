const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.get('/', campaignController.getAllCampaigns);
router.get('/:id', campaignController.getCampaignById);
router.post('/', campaignController.createCampaign);

module.exports = router;