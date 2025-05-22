const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { authenticateToken, restrictToAdmin } = require('./middleware/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware

app.use(cors());
app.use(express.json());

// koneksi ke mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Koneksi mongoDB error', err));

// rute dasar
app.get('/', (req, res) => {
  res.send('Backend for Astro project is running');
});

// autentikasi
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// campaign
const campaignRoutes = require('./routes/campaigns');
app.use('/api/campaigns', campaignRoutes);

// proteksi POST admin
app.use('/api/campaigns', authenticateToken, restrictToAdmin, campaignRoutes);

// jalanin server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});