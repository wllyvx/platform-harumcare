const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Setup GridFS
let gridfsBucket;

// Wait for MongoDB connection
mongoose.connection.once('open', () => {
  gridfsBucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });
  console.log('GridFS initialized');
});

// Multer config untuk memory storage
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('File harus berupa gambar!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // Maksimal 5MB
  }
});

// Route untuk upload single image ke GridFS
router.post('/', authenticateToken, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Tidak ada file yang diupload' });
    }

    if (!gridfsBucket) {
      return res.status(500).json({ error: 'GridFS belum siap' });
    }

    // Generate nama file unik
    const filename = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + req.file.originalname;
    
    // Upload ke GridFS
    const uploadStream = gridfsBucket.openUploadStream(filename, {
      metadata: {
        originalName: req.file.originalname,
        uploadDate: new Date(),
        contentType: req.file.mimetype
      }
    });

    // Handle error
    uploadStream.on('error', (error) => {
      console.error('GridFS upload error:', error);
      return res.status(500).json({ error: 'Gagal mengupload file ke database' });
    });

    // Handle success
    uploadStream.on('finish', () => {
      const imageUrl = `http://localhost:3000/api/upload/image/${uploadStream.id}`;
      
      res.json({ 
        message: 'File berhasil diupload ke MongoDB',
        imageUrl: imageUrl,
        fileId: uploadStream.id.toString(),
        filename: filename
      });
    });

    // Upload file buffer ke GridFS
    uploadStream.end(req.file.buffer);

  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Gagal mengupload file' });
  }
});

// Route untuk mengambil gambar dari GridFS
router.get('/image/:id', (req, res) => {
  try {
    if (!gridfsBucket) {
      return res.status(500).json({ error: 'GridFS belum siap' });
    }

    const fileId = new mongoose.Types.ObjectId(req.params.id);
    
    const downloadStream = gridfsBucket.openDownloadStream(fileId);
    
    downloadStream.on('error', (error) => {
      console.error('GridFS download error:', error);
      return res.status(404).json({ error: 'File tidak ditemukan' });
    });

    downloadStream.on('file', (file) => {
      res.set('Content-Type', file.metadata?.contentType || 'image/jpeg');
      res.set('Cache-Control', 'public, max-age=31536000');
    });

    downloadStream.pipe(res);

  } catch (error) {
    console.error('Error retrieving file:', error);
    res.status(400).json({ error: 'Invalid file ID' });
  }
});

// Route untuk mendapatkan info file
router.get('/info/:id', (req, res) => {
  try {
    if (!gridfsBucket) {
      return res.status(500).json({ error: 'GridFS belum siap' });
    }

    const fileId = new mongoose.Types.ObjectId(req.params.id);
    
    gridfsBucket.find({ _id: fileId }).toArray()
      .then(files => {
        if (!files || files.length === 0) {
          return res.status(404).json({ error: 'File tidak ditemukan' });
        }
        
        res.json(files[0]);
      })
      .catch(err => {
        console.error('Error getting file info:', err);
        res.status(500).json({ error: 'Database error' });
      });

  } catch (error) {
    console.error('Error getting file info:', error);
    res.status(400).json({ error: 'Invalid file ID' });
  }
});

// Route untuk menghapus file dari GridFS
router.delete('/:id', authenticateToken, (req, res) => {
  try {
    if (!gridfsBucket) {
      return res.status(500).json({ error: 'GridFS belum siap' });
    }

    const fileId = new mongoose.Types.ObjectId(req.params.id);
    
    gridfsBucket.delete(fileId)
      .then(() => {
        res.json({ message: 'File berhasil dihapus' });
      })
      .catch(error => {
        console.error('GridFS delete error:', error);
        res.status(500).json({ error: 'Gagal menghapus file' });
      });

  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(400).json({ error: 'Invalid file ID' });
  }
});

module.exports = router;