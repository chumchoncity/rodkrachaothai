const indexModel = require("../models/indexModel");
const machineModel = require("../models/machineModel");


exports.index = async (req, res) => {
    try {  
        const machineRandom = await indexModel.machineRandom();
        
    
        res.render("home/index", {
            currentPage: "index",
            machineRandom,
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
exports.machineDetail = async (req, res) => {
    try {  
        const machineDetail = await machineModel.machineDetail();
        
    
        res.render("machines/machineDetail", {
            currentPage: "รายละเอียดเครื่องจักร",
            machineDetail,
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