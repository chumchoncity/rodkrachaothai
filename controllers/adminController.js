const adminModel = require("../models/adminModel");
const articleModel = require("../models/articleModel");


exports.adminDashboard = async (req, res) => {
    try {
 
    const userId = req.session.user.id;

    res.render("admin/index", {
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
exports.articlesList = async (req, res) => {
    try {
 
    const userId = req.session.user.id;
    const articles = await articleModel.getAllArticles();

    res.render("admin/articles/index", {
        layout: "layouts/admin-layout",
        pageTitle: "บทความ",
        currentPage: "articles",
        userId,
        articles
    });
    } catch (error) {
        console.error(error);
        res.send("Articles error")
    }
    
};
exports.showCreateArticle = async (req, res) => {
    try {
 
    const userId = req.session.user.id;

    res.render("admin/articles/create", {
        layout: "layouts/admin-layout",
        pageTitle: "สร้างบทความ",
        currentPage: "create-article",
        userId: userId
    });
    } catch (error) {
        console.error(error);
        res.send("Create Article error")
    }
    
};
