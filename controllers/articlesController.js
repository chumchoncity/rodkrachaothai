const articleModel = require("../models/articleModel");


exports.articles = async (req, res) => {
    try {  

        const articles = await articleModel.getAllArticlesPublic();
        
        
    
        res.render("articles/index", {
            currentPage: "articles",
            articles,
            meta: {

                title:
                    "บทความ และสาระความรู้ เกี่ยวกับรถกระเช้าบูมลิฟท์ เอ็กซ์ลิฟท์ | รถกระเช้าไทย",

                description:
                    "เรียนรู้และทำความเข้าใจให้มากขึ้นเกี่ยวกับ เครื่องจักร บูมลิฟท์ และเอ็กซ์ลิฟท์",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com/articles"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};

exports.articleDetail = async (req, res) => {
    try {  

        const { slug } = req.params;

        const article = await articleModel.articleDetail(slug);

        if (!req.session.viewedArticles) {
            req.session.viewedArticles = [];
        }

        if (!req.session.viewedArticles.includes(article.id)) {
            await articleModel.incrementView(article.id);
            req.session.viewedArticles.push(article.id);
            article.views++;
        }

        const articles = await articleModel.latestArticles();
        
        
    
        res.render("articles/article-detail", {
            currentPage: "article-detail",
            article,
            articles,
            meta: {

                title:article.meta_title || "บทความรถกระเช้าไทย",

                description:article.meta_description,

                image:
                    "https://www.rodkrachaothai.com/images/articles/article.featured_image",

                url:
                    "https://www.rodkrachaothai.com/articles/article.slug"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};