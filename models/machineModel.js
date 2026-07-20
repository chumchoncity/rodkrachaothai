const db = require("../config/db");


exports.machineAll = async () => {
    const [rows] = await db.query(`
        SELECT m.*,
        b.brand_name AS brand_name,
        p.power AS power,
        p.power_th AS power_th,
        mt.type_name AS type_name

        
        FROM machines m
        JOIN brand b
        ON m.brand_id = b.id
        JOIN power_source p
        ON m.power_source_id = p.id
        JOIN machine_type mt
        ON m.type_id = mt.id
        ORDER BY working_height ASC;   
    `);
    return rows;
};

exports.machineDetail = async (slug) => {
    const [rows] = await db.query(`
        SELECT m.*,
        b.brand_name AS brand_name,
        p.power AS power,
        p.power_th AS power_th,
        mt.type_name AS type_name

        
        FROM machines m
        JOIN brand b
        ON m.brand_id = b.id
        JOIN power_source p
        ON m.power_source_id = p.id
        JOIN machine_type mt
        ON m.type_id = mt.id
        WHERE m.slug = ?
        LIMIT 1   
    `,[slug]);
    return rows[0];
};

exports.machineLower = async (typeId, workingHeight) => {
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
        WHERE mt.id = ?
        AND m.working_height < ?
        ORDER BY m.working_height DESC
        LIMIT 2;   
    `,[typeId, workingHeight]);
    return rows[0];
};

exports.machineHigher = async (typeId, workingHeight) => {
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
        WHERE mt.id = ?
        AND m.working_height > ?
        ORDER BY m.working_height ASC
        LIMIT 2;   
    `,[typeId, workingHeight]);
    return rows[0];
};

exports.getMachines = async (filters) => {

    let sql = `
        SELECT m.*,
        b.brand_name AS brand_name,
        p.power AS power,
        p.power_th AS power_th,
        mt.type_name AS type_name

        
        FROM machines m
        JOIN brand b
        ON m.brand_id = b.id
        JOIN power_source p
        ON m.power_source_id = p.id
        JOIN machine_type mt
        ON m.type_id = mt.id
        WHERE 1=1
    `;

    const params = [];

    if (filters.brand_name) {
        sql += " AND brand_name = ?";
        params.push(filters.brand_name);
    }

    if (filters.type_name) {
        sql += " AND type_name = ?";
        params.push(filters.type_name);
    }

    if (filters.working_height) {
        sql += " AND working_height >= ?";
        params.push(filters.working_height);
    }

    sql += " ORDER BY working_height ASC";

    const [rows] = await db.query(sql, params);

    return rows;
};