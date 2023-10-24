const express = require('express');
const router = express.Router();
const { getArticles } = require('../controllers/article.controller');

// on définit la route pour récupérer tous les articles avec le controller
router.get('/', getArticles);

module.exports = router;