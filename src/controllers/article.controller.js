const db = require('../models');

module.exports = {
    // controller pour récupérer tous les articles
    getArticles: async (req, res) => {

        try {
            // on récupère tous les articles avec la méthode de sequelize findAll()
            const articles = await db.Article.findAll();
            // on renvoie les articles en json
            res.status(200).json({
                results: articles,
                success: true
            });
        }

        catch (err) {
            // si une erreur se produit, on renvoie un code 500 avec le message de l'erreur
            res.status(500).json({ message: err.message });
        }

    }
}