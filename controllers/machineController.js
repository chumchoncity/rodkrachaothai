const indexModel = require("../models/indexModel");
const machineModel = require("../models/machineModel");



exports.machineAll = async (req, res) => {
    try {  
        const machineAll = await machineModel.machineAll();
        
    
        res.render("machines/machines", {
            currentPage: "รายการเครื่องจักรทั้งหมด",
            machineAll,
            meta: {

                title:
                    "บริการให้เช่า บูมลิฟท์ เอ็กซ์ลิฟท์ | รถกระเช้าไทย",

                description:
                    "บริการเครื่องจักร สำหรับทำงานบนที่สูง รถกระเช้า บูมลิฟท์ เอ็กซ์ลิฟท์ สามารถเช่าแบบ รายวัน รายเดือน และ รายปี",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com/machines"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};

exports.machineDetail = async (req, res) => {
    try {
        
        const { slug } = req.params;
        const machine = await machineModel.machineDetail(slug);
        const lowerMachine = await machineModel.machineLower(
            machine.type_id,
            machine.working_height
        );

        const higherMachine = await machineModel.machineHigher(
            machine.type_id,
            machine.working_height
        );
        
    
        res.render("machines/machineDetail", {
            currentPage: "รายละเอียดเครื่องจักร",
            machine,
            higherMachine,
            lowerMachine,
            meta: {

                title:
                    "เครื่องจักรทำงานบนที่สูง บูมลิฟท์ เอ็กซ์ลิฟท์ | รถกระเช้าไทย",

                description:
                    "รถกระเช้าเครื่องจักรทำงานบนที่สูง มีทั้งบูมลิฟท์ และ เอ็กซ์ลิฟท์ ระยะทำงานตั้งแต่ 6-43 เมตรเลือกใช้ตามความเหมาะสมหน้างาน",

                image:
                    "https://www.rodkrachaothai.com/images/default-og.png",

                url:
                    "https://www.rodkrachaothai.com/machines/:slug"
                }       
        });
        } catch (error) {
            console.error(error);
            res.send("Index error")
        }
};