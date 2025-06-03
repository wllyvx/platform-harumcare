const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');

// Register Admin (khusus admin untuk membuat akun admin)
router.post('/register-admin', authenticateToken, restrictToAdmin, async (req, res) => {
  try {
    const { nama, username, email, password, nomorHp, alamat, role } = req.body;
    
    // Validasi input
    if (!nama || !username || !email || !password || !nomorHp) {
      return res.status(400).json({ error: 'Nama, username, email, password, dan nomor HP wajib diisi' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ 
      nama, 
      username, 
      email, 
      password: hashedPassword, 
      nomorHp, 
      ...(alamat && { alamat }), // Hanya tambahkan alamat jika ada
      role: role || 'admin' 
    });
    await user.save();
    res.status(201).json({ message: 'Admin berhasil dibuat', userId: user._id });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(400).json({ error: `${field} sudah digunakan` });
    }
    res.status(400).json({ error: 'Error membuat admin' });
  }
});

// Register User (untuk pendaftaran user biasa)
router.post('/register', async (req, res) => {
  try {
    const { nama, username, email, password, nomorHp, alamat } = req.body;
    
    // Validasi input
    if (!nama || !username || !email || !password || !nomorHp || !alamat) {
      return res.status(400).json({ error: 'Semua field wajib diisi' });
    }
    
    // Validasi email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Format email tidak valid' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ 
      nama, 
      username, 
      email, 
      password: hashedPassword, 
      nomorHp, 
      alamat, 
      role: 'user' 
    });
    await user.save();
    res.status(201).json({ message: 'User berhasil terdaftar', userId: user._id });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(400).json({ error: `${field} sudah digunakan` });
    }
    res.status(400).json({ error: 'Error mendaftarkan user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username dan password wajib diisi' });
    }
    
    const user = await User.findOne({ 
      $or: [{ username }, { email: username }] 
    });
    
    if (!user) {
      return res.status(401).json({ error: 'Username/email atau password salah' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Username/email atau password salah' });
    }
    
    const token = jwt.sign(
      { userId: user._id, role: user.role, nama: user.nama },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '24h' }
    );
    
    res.json({ 
      token, 
      role: user.role,
      userId: user._id,
      nama: user.nama,
      message: 'Login berhasil'
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get User Profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update User Profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { nama, email, nomorHp, alamat } = req.body;
    
    const updateData = {};
    if (nama) updateData.nama = nama;
    if (email) updateData.email = email;
    if (nomorHp) updateData.nomorHp = nomorHp;
    if (alamat) updateData.alamat = alamat;
    updateData.updatedAt = new Date();
    
    const user = await User.findByIdAndUpdate(
      req.user.userId, 
      updateData, 
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan' });
    }
    
    res.json({ message: 'Profile berhasil diupdate', user });
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyPattern)[0];
      return res.status(400).json({ error: `${field} sudah digunakan` });
    }
    res.status(400).json({ error: 'Error mengupdate profile' });
  }
});

module.exports = router;