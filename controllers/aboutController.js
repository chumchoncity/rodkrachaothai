


exports.about = async (req, res) => {
    try {  
        
    
        res.render("home/about", {
            currentPage: "about",
            meta: {

                title:
                    "เกี่ยวกับเรา | รถกระเช้าไทย",

                description:
                    "รถกระเช้าไทย เป็นเว็บไซต์ที่ให้ข้อมูลเกี่ยวกับรถกระเช้า บูมลิฟท์ (Boom lift) และ เอ็กซ์ลิฟท์ (Scissor lift) เพื่อช่วยให้ผู้ใช้งานสามารถศึกษาข้อมูล เปรียบเทียบรุ่น และค้นหาเครื่องจักรได้เหมาะสมกับลักษณะงานได้ง่ายยิ่งขึ้น รถกระเช้าไทย มีบริการให้เช่าเครื่องจักร บูมลิฟท์ (Boom lift) และ เอ็กซ์ลิฟท์ (Scissor lift) แบบรายวัน รายเดือน และรายปี บริการอบรมการใช้งาน และให้คำปรึกษาเกี่ยวกับการเลือกใช้เครื่องจักรให้เหมาะสมและคุ้มค่า",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com/about"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};