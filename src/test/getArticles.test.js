const { getArticles } = require("../controllers/article.controller");
const { Article } = require("../models/Article");
const { ARTICLES } = require("./data/articles");

describe("Controller getArticles", () => { 
    it("It should return a res 200 with a list of articles as an array of objects", () => {
        //utiliser faker pour générer des données aléatoires
        const mockup = {
            results: ARTICLES,
            success: true
        }
    });
    it("It should return a res 404 not found with an empty array of articles", () => { 
        const mockup = {
            message: "Not found",
            success: false
        }
    });
    it("It should return a res 500 error", () => { 
        const mockup = {
            message: "Internal servor error",
            success: false
        }
    });
});