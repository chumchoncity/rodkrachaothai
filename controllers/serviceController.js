

exports.service = async (req, res) => {
    try {  
        
        
    
        res.render("home/service", {
            currentPage: "service",
            meta: {

                title:
                    "บริการของเรา | รถกระเช้าไทย",

                description:
                    "บริการให้เช่าเครื่องจักร บูมลิฟท์ เอ็กซ์ลิฟท์ สำหรับทำงานบนที่สูง บริการอบรมพร้อมออกไปรับรอง ให้คำปรึกษาการเลือกใช้เครื่องจักร",

                image:
                    "https://www.rodkrachaothai.com/images/jlg-boom-lift.webp",

                url:
                    "https://www.rodkrachaothai.com/service"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};