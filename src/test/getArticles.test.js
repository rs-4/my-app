const { getArticles } = require("../controllers/article.controller");
const db = require("../models/");
const { ARTICLES } = require("./data/articles");

jest.mock('../models/', () => (
    {
        Article: {
            findAll: jest.fn()
        }
    }
));

describe("Controller getArticles", () => {
    it("It should return a res 200 with a list of articles as an array of objects", async () => {
        //utiliser faker pour générer des données aléatoires
        const mockup = {
            results: ARTICLES,
            success: true
        }
        // on simule la résolution de la promesse de la méthode findAll()
        db.Article.findAll.mockResolvedValue(mockup.results);
        // on simule les méthodes json() et status() de l'objet res
        const mockJson = jest.fn();
        const mockStatus = jest.fn(() => ({ json: mockJson }));
        // on simule l'objet res
        const res = { status: mockStatus };
        // on simule l'objet req
        const req = {};

        // on appelle la méthode getArticles
        await getArticles(req, res);

        // on vérifie que la méthode json() renvoie bien le mockup
        expect(mockJson).toHaveBeenCalledWith({
            results: ARTICLES, 
            success: true
        });

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