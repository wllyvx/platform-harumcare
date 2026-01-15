const express = require('express');
const router = express.Router();
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');
const blogController = require('../controllers/blogController');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/latest', blogController.getLatestBlogs);
router.get('/categories', blogController.getCategories);
router.get('/campaign/:campaignId', blogController.getBlogsByCampaign);
router.get('/:slug', blogController.getBlogBySlug);

// Protected routes (require authentication)
router.post('/', authenticateToken, blogController.createBlog);
router.put('/:id', authenticateToken, blogController.updateBlog);
router.delete('/:id', authenticateToken, blogController.deleteBlog);

module.exports = router;
