const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {isAdmin} = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");




//admin dashboard
router.get("/admin/dashboard/:id", isAdmin, adminController.adminDashboard);
router.get("/admin/articles", isAdmin, adminController.articlesList);
router.get("/admin/articles/edit/:id", isAdmin, adminController.editArticlePage);
router.post("/admin/articles/edit/:id", isAdmin, upload.single("featured_image"), adminController.updateArticle);
router.get("/admin/create-article", isAdmin, adminController.showCreateArticle);


//-------------------------------

module.exports = router;