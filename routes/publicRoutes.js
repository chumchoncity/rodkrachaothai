const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const aboutController = require("../controllers/aboutController");
const serviceController = require("../controllers/serviceController");
const articlesController = require("../controllers/articlesController");
const contactController = require("../controllers/contactController");
const machineController = require("../controllers/machineController");

router.get("/", indexController.index);
router.get("/about", aboutController.about);
router.get("/service", serviceController.service);
router.get("/articles", articlesController.articles);
router.get("/contact", contactController.contact);
router.get("/machines", machineController.machineAll);
router.get("/machines/:slug", machineController.machineDetail);

module.exports = router;