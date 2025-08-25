const News = require('../models/News');

// Get all news with pagination and filters
exports.getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const status = req.query.status || 'published'; // Default to published news
    const campaignId = req.query.campaignId;
    
    const query = { status };
    if (category) query.category = category;
    if (campaignId) query.campaignId = campaignId;

    const totalNews = await News.countDocuments(query);
    const totalPages = Math.ceil(totalNews / limit);

    const news = await News.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
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

    // Get related campaign if news has campaignId
    let relatedCampaign = null;
    if (news.campaignId) {
      const Campaign = require('../models/Campaign');
      relatedCampaign = await Campaign.findById(news.campaignId);
    }

    // Increment view count
    news.viewCount += 1;
    await news.save();

    const newsWithCampaign = {
      ...news.toObject(),
      relatedCampaign
    };

    res.json(newsWithCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new news
exports.createNews = async (req, res) => {
  try {
    const { title, content, category, image, status, campaignId } = req.body;
    
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
      author: req.user.userId, // Changed from _id to userId
      campaignId: campaignId || null
    });

    const savedNews = await news.save();
    
    // If campaignId is provided, add this news to campaign's relatedNews array
    if (campaignId) {
      const Campaign = require('../models/Campaign');
      await Campaign.findByIdAndUpdate(
        campaignId,
        { $addToSet: { relatedNews: savedNews._id } }
      );
    }
    
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
    const { title, content, category, image, status, campaignId } = req.body;
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ error: 'Berita tidak ditemukan' });
    }

    // Check if user is author or admin
    if (news.author.toString() !== req.user._id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Tidak memiliki izin untuk mengubah berita ini' });
    }

    // Handle campaignId update
    if (campaignId !== undefined) {
      const Campaign = require('../models/Campaign');
      
      // Remove from old campaign if exists
      if (news.campaignId && news.campaignId.toString() !== campaignId) {
        await Campaign.findByIdAndUpdate(
          news.campaignId,
          { $pull: { relatedNews: news._id } }
        );
      }
      
      // Add to new campaign if provided
      if (campaignId) {
        await Campaign.findByIdAndUpdate(
          campaignId,
          { $addToSet: { relatedNews: news._id } }
        );
      }
      
      news.campaignId = campaignId || null;
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

    // Remove from campaign's relatedNews array if exists
    if (news.campaignId) {
      const Campaign = require('../models/Campaign');
      await Campaign.findByIdAndUpdate(
        news.campaignId,
        { $pull: { relatedNews: news._id } }
      );
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
    const campaignId = req.query.campaignId;
    
    const query = { status: 'published' };
    if (campaignId) query.campaignId = campaignId;
    
    const news = await News.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get news by campaign
exports.getNewsByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const query = { 
      campaignId: campaignId,
      status: 'published'
    };

    const totalNews = await News.countDocuments(query);
    const totalPages = Math.ceil(totalNews / limit);

    const news = await News.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
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

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await News.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
