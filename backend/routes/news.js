const express = require('express');
const router = express.Router();
const { authenticateToken, restrictToAdmin } = require('../middleware/auth');
const newsController = require('../controllers/newsController');

// Public routes
router.get('/', newsController.getAllNews);
router.get('/latest', newsController.getLatestNews);
router.get('/:slug', newsController.getNewsBySlug);

// Protected routes (require authentication)
router.post('/', authenticateToken, newsController.createNews);
router.put('/:id', authenticateToken, newsController.updateNews);
router.delete('/:id', authenticateToken, newsController.deleteNews);

module.exports = router;
