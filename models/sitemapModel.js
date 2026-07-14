const db = require("../config/db");

//sitemap model
exports.getAllMachinesSitemap = async () => {

    const [rows] = await db.query(`
        SELECT slug
        FROM machines
    `);

    return rows;
};

//sitemap employer
exports.getAllEmployerSitemap = async () => {

    const [rows] = await db.query(`
        SELECT id
        FROM companies
        WHERE status = 'active'
    `);

    return rows;
};