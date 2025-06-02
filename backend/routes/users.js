const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password field
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 