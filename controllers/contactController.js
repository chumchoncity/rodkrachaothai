


exports.contact = async (req, res) => {
    try {  
        
    
        res.render("home/contact", {
            currentPage: "contact",
            
            meta: {

                title:
                    "ติดต่อเรา | รถกระเช้าไทย",

                description:
                    "ติดต่อสอบถามรายละเอียด การเช่า การใช้งาน และพร้อมให้คำปรึกษา",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com/contact"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};