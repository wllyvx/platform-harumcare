const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

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

// import rute
const campaignRoutes = require('./routes/campaigns');
app.use('/api/campaigns', campaignRoutes);

// jalanin server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});