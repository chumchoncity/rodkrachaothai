const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");



router.get("/articles", articlesController.articles);
router.get("/articles/:slug", articlesController.articleDetail);


module.exports = router;