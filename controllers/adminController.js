const adminModel = require("../models/adminModel");


exports.adminDashboard = async (req, res) => {
    try {
 
    const userId = req.session.user.id;

    res.render("admin/dashboard", {
        layout: "layouts/admin-layout",
        pageTitle: "Admin Dashboard",
        currentPage: "dashboard",
        userId: userId
    });
    } catch (error) {
        console.error(error);
        res.send("Dashboard error")
    }
    
};
