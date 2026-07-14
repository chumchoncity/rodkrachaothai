const db = require("../config/db");

exports.machineRandom = async () => {
    const [rows] = await db.query(`
        SELECT m.*,
        b.brand_name AS brand_name,
        p.power AS power,
        p.power_th AS power_th
        
        FROM machines m
        JOIN brand b
        ON m.brand_id = b.id
        JOIN power_source p
        ON m.power_source_id = p.id
        JOIN machine_type mt
        ON m.type_id = mt.id
        ORDER BY RAND()
        LIMIT 10;   
    `);
    return rows;
};
