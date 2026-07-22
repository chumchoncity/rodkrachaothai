const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const {isAdmin} = require("../middlewares/authMiddleware");



//admin dashboard
router.get("/admin/dashboard/:id", isAdmin, adminController.adminDashboard);


//-------------------------------

module.exports = router;