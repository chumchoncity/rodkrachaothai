const adminModel = require("../models/adminModel");
const articleModel = require("../models/articleModel");
const fs = require("fs");
const path = require("path");


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
exports.createArticlePage = async (req, res) => {
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

exports.createArticle = async (req, res) => {

    const userId = req.session.user.id;
    const status = req.body.status;
    const publishedAt = status === "published"
    ? new Date()
    : null;

        if (req.file) {
            featuredImage = req.file ? req.file.filename : null;
            ogImage = featuredImage;
        }
    



        const data = {
            title: req.body.title,
            slug: req.body.slug,
            short_description: req.body.short_description,
            content: req.body.content,
            featured_image: featuredImage,
            meta_title: req.body.meta_title,
            meta_description: req.body.meta_description,
            og_title: req.body.og_title,
            og_description: req.body.og_description,
            og_image: ogImage,
            canonical_url: req.body.canonical_url,
            keywords: req.body.keywords,
            is_featured: req.body.is_featured,
            status: req.body.status,
            published_at: publishedAt,
            userId
    };

    console.log(data);

    await articleModel.createArticle(data);

        if (req.file && req.body.old_featured_image) {

        const oldImage = path.join(
            __dirname,
            "../public/images/articles",
            req.body.old_featured_image
        );

        if (fs.existsSync(oldImage)) {
            fs.unlinkSync(oldImage);
        }

    }

    res.redirect("/admin/articles");
    
    
};


//admin/articles/id/edit:edit
exports.editArticlePage = async (req, res) => {
    try {

    const userId = req.session.user.id;
    const id = req.params.id;
    const article = await articleModel.getArticleById(id);

        if (!article) {

            return res.status(404).send("Article not found");

    }

    res.render("admin/articles/edit", {
        layout: "layouts/admin-layout",
        pageTitle: "แก้ไขบทความ",
        currentPage: "articles",
        article,
        userId
    });
    } catch (error) {
        console.error(error);
        res.send("Edit Article error")
    }
    
};

//admin/articles/id/edit:update
exports.updateArticle = async (req, res) => {

    const userId = req.session.user.id;
    const id = req.params.id;
    let featuredImage = req.body.old_featured_image;

        if (req.file) {
            featuredImage = req.file.filename;
            ogImage = featuredImage;
        }
    



    await articleModel.updateArticle(id, {

        title: req.body.title,
        slug: req.body.slug,
        short_description: req.body.short_description,
        content: req.body.content,
        featured_image: featuredImage,
        meta_title: req.body.meta_title,
        meta_description: req.body.meta_description,
        og_title: req.body.og_title,

        og_image: ogImage,


        canonical_url: req.body.canonical_url,
        keywords: req.body.keywords,
        is_featured: req.body.is_featured,
        status: req.body.status,
        userId

    });

        if (req.file && req.body.old_featured_image) {

        const oldImage = path.join(
            __dirname,
            "../public/images/articles",
            req.body.old_featured_image
        );

        if (fs.existsSync(oldImage)) {
            fs.unlinkSync(oldImage);
        }

    }

    res.redirect("/admin/articles");
    
    
};

//admin/delete-articles
exports.deleteArticle = async (req, res) => {

    try {
        console.log(req.params.id);

        await articleModel.deleteArticle(req.params.id);

        res.redirect("/admin/articles");

    } catch (err) {

        console.error(err);
        res.status(500).send("Delete Error");

    }

};
