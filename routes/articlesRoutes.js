const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");


// articles
router.get("/articles", articlesController.articles);
// articles/slug
router.get("/articles/:slug", articlesController.articleDetail);




module.exports = router;