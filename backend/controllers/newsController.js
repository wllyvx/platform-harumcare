const News = require('../models/News');

// Get all news with pagination and filters
exports.getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const status = req.query.status || 'published'; // Default to published news
    
    const query = { status };
    if (category) query.category = category;

    const totalNews = await News.countDocuments(query);
    const totalPages = Math.ceil(totalNews / limit);

    const news = await News.find(query)
      .populate('author', 'nama username')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      news,
      currentPage: page,
      totalPages,
      totalNews
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single news by slug
exports.getNewsBySlug = async (req, res) => {
  try {
    const news = await News.findOne({ slug: req.params.slug })
      .populate('author', 'nama username');
    
    if (!news) {
      return res.status(404).json({ error: 'Berita tidak ditemukan' });
    }

    // Increment view count
    news.viewCount += 1;
    await news.save();

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new news
exports.createNews = async (req, res) => {
  try {
    const { title, content, category, image, status } = req.body;
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    
    // Get author from authenticated user
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ error: 'User tidak terautentikasi dengan benar' });
    }

    const news = new News({
      title,
      slug,
      content,
      category,
      image,
      status,
      author: req.user.userId // Changed from _id to userId
    });

    const savedNews = await news.save();
    // Populate author details in response
    const populatedNews = await News.findById(savedNews._id).populate('author', 'nama username');
    
    res.status(201).json(populatedNews);
  } catch (error) {
    // Log the full error for debugging
    console.error('Create news error:', error);
    res.status(400).json({ error: error.message });
  }
};

// Update news
exports.updateNews = async (req, res) => {
  try {
    const { title, content, category, image, status } = req.body;
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ error: 'Berita tidak ditemukan' });
    }

    // Check if user is author or admin
    if (news.author.toString() !== req.user._id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Tidak memiliki izin untuk mengubah berita ini' });
    }

    news.title = title || news.title;
    news.content = content || news.content;
    news.category = category || news.category;
    news.image = image || news.image;
    news.status = status || news.status;

    await news.save();
    res.json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete news
exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ error: 'Berita tidak ditemukan' });
    }

    // Check if user is author or admin
    if (news.author.toString() !== req.user._id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Tidak memiliki izin untuk menghapus berita ini' });
    }

    await news.deleteOne();
    res.json({ message: 'Berita berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get latest news
exports.getLatestNews = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const news = await News.find({ status: 'published' })
      .populate('author', 'nama username')
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await News.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
