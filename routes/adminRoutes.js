const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {isAdmin} = require("../middlewares/authMiddleware");



//admin dashboard
router.get("/admin/dashboard/:id", isAdmin, adminController.adminDashboard);
router.get("/admin/articles", isAdmin, adminController.articlesList);
router.get("/admin/create-article", isAdmin, adminController.showCreateArticle);


//-------------------------------

module.exports = router;