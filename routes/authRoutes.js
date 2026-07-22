const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

//auth/login
router.get("/auth/login", authController.showLogin);
router.post("/auth/login", authController.login);
router.get("/auth/logout", authController.logout);

module.exports = router;