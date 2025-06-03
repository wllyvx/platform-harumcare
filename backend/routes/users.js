const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');

// Get all users
router.get('/', authenticateToken, restrictToAdmin, async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password field
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user by ID
router.put('/:id', authenticateToken, restrictToAdmin, async (req, res) => {
    try {
        const { nama, username, email, nomorHp, role, password } = req.body;
        
        // Persiapkan data update
        const updateData = {};
        if (nama) updateData.nama = nama;
        if (username) updateData.username = username;
        if (email) updateData.email = email;
        if (nomorHp) updateData.nomorHp = nomorHp;
        if (role) updateData.role = role;
        
        // Jika ada password baru, hash password
        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        // Update user
        const user = await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true, runValidators: true }
        ).select('-password');

        if (!user) {
            return res.status(404).json({ error: 'User tidak ditemukan' });
        }

        res.json({ message: 'User berhasil diupdate', user });
    } catch (err) {
        if (err.code === 11000) {
            const field = Object.keys(err.keyPattern)[0];
            return res.status(400).json({ error: `${field} sudah digunakan` });
        }
        res.status(400).json({ error: 'Error mengupdate user' });
    }
});

// Delete user by ID
router.delete('/:id', authenticateToken, restrictToAdmin, async (req, res) => {
    try {
        // Cek apakah user yang akan dihapus adalah admin terakhir
        if (req.user.role === 'admin') {
            const adminCount = await User.countDocuments({ role: 'admin' });
            const userToDelete = await User.findById(req.params.id);
            
            if (adminCount === 1 && userToDelete?.role === 'admin') {
                return res.status(400).json({ 
                    error: 'Tidak dapat menghapus admin terakhir' 
                });
            }
        }

        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user) {
            return res.status(404).json({ error: 'User tidak ditemukan' });
        }

        res.json({ message: 'User berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: 'Error menghapus user' });
    }
});

module.exports = router; 