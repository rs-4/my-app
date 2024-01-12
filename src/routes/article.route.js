const express = require('express');
const router = express.Router();
const { getArticles, getArticle } = require('../controllers/article.controller');

// on définit la route pour récupérer tous les articles avec le controller

/**
 * @openapi
 * /api/articles:
 *   get:
 *     description: Get all articles 
 *     responses:
 *       200:
 *         description: Returns an array of article.
 */

router.get('/', getArticles);


/**
 * @openapi
 * /api/article:
 *   get:
 *     description: Get one article 
 *     responses:
 *       200:
 *         description: Returns an article.
 */
router.get('/:id', getArticle);

module.exports = router;