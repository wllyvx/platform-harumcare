const Blog = require('../models/Blog');

// Get all blogs with pagination and filters
exports.getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const category = req.query.category;
    const status = req.query.status || 'published'; // Default to published blogs
    const campaignId = req.query.campaignId;
    
    const query = { status };
    if (category) query.category = category;
    if (campaignId) query.campaignId = campaignId;

    const totalBlogs = await Blog.countDocuments(query);
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      blogs,
      currentPage: page,
      totalPages,
      totalBlogs
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug })
      .populate('author', 'nama username');
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog tidak ditemukan' });
    }

    // Get related campaign if blog has campaignId
    let relatedCampaign = null;
    if (blog.campaignId) {
      const Campaign = require('../models/Campaign');
      relatedCampaign = await Campaign.findById(blog.campaignId);
    }

    // Increment view count
    blog.viewCount += 1;
    await blog.save();

    const blogWithCampaign = {
      ...blog.toObject(),
      relatedCampaign
    };

    res.json(blogWithCampaign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
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

    const blog = new Blog({
      title,
      slug,
      content,
      category,
      image,
      status,
      author: req.user.userId, // Changed from _id to userId
      campaignId: campaignId || null
    });

    const savedBlog = await blog.save();
    
    // If campaignId is provided, add this blog to campaign's relatedBlogs array
    if (campaignId) {
      const Campaign = require('../models/Campaign');
      await Campaign.findByIdAndUpdate(
        campaignId,
        { $addToSet: { relatedBlogs: savedBlog._id } }
      );
    }
    
    // Populate author details in response
    const populatedBlog = await Blog.findById(savedBlog._id).populate('author', 'nama username');
    
    res.status(201).json(populatedBlog);
  } catch (error) {
    // Log the full error for debugging
    console.error('Create blog error:', error);
    res.status(400).json({ error: error.message });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, category, image, status, campaignId } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog tidak ditemukan' });
    }

    // Check if user is author or admin
    if (blog.author.toString() !== req.user._id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Tidak memiliki izin untuk mengubah blog ini' });
    }

    // Handle campaignId update
    if (campaignId !== undefined) {
      const Campaign = require('../models/Campaign');
      
      // Remove from old campaign if exists
      if (blog.campaignId && blog.campaignId.toString() !== campaignId) {
        await Campaign.findByIdAndUpdate(
          blog.campaignId,
          { $pull: { relatedBlogs: blog._id } }
        );
      }
      
      // Add to new campaign if provided
      if (campaignId) {
        await Campaign.findByIdAndUpdate(
          campaignId,
          { $addToSet: { relatedBlogs: blog._id } }
        );
      }
      
      blog.campaignId = campaignId || null;
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    blog.image = image || blog.image;
    blog.status = status || blog.status;

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog tidak ditemukan' });
    }

    // Check if user is author or admin
    if (blog.author.toString() !== req.user._id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Tidak memiliki izin untuk menghapus blog ini' });
    }

    // Remove from campaign's relatedBlogs array if exists
    if (blog.campaignId) {
      const Campaign = require('../models/Campaign');
      await Campaign.findByIdAndUpdate(
        blog.campaignId,
        { $pull: { relatedBlogs: blog._id } }
      );
    }

    await blog.deleteOne();
    res.json({ message: 'Blog berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get latest blogs
exports.getLatestBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const campaignId = req.query.campaignId;
    
    const query = { status: 'published' };
    if (campaignId) query.campaignId = campaignId;
    
    const blogs = await Blog.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
      .sort({ createdAt: -1 })
      .limit(limit);

    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get blogs by campaign
exports.getBlogsByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    const query = { 
      campaignId: campaignId,
      status: 'published'
    };

    const totalBlogs = await Blog.countDocuments(query);
    const totalPages = Math.ceil(totalBlogs / limit);

    const blogs = await Blog.find(query)
      .populate('author', 'nama username')
      .populate('campaignId', 'title imageUrl')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      blogs,
      currentPage: page,
      totalPages,
      totalBlogs
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Blog.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
