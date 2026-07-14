


exports.contact = async (req, res) => {
    try {  
        
    
        res.render("home/contact", {
            currentPage: "contact",
            
            meta: {

                title:
                    "บริการให้เช่า บูมลิฟท์ เอ็กซ์ลิฟท์ | รถกระเช้าไทย",

                description:
                    "บริการเครื่องจักร สำหรับทำงานบนที่สูง รถกระเช้า บูมลิฟท์ เอ็กซ์ลิฟท์ สามารถเช่าแบบ รายวัน รายเดือน และ รายปี",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};