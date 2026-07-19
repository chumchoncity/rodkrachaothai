


exports.articles = async (req, res) => {
    try {  
        
        
    
        res.render("home/articles", {
            currentPage: "articles",
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