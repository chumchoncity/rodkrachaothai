const db = require("../config/db");

//sitemap model
exports.getAllMachinesSitemap = async () => {

    const [rows] = await db.query(`
        SELECT slug
        FROM machines
    `);

    return rows;
};
//sitemap articles
exports.getAllArticlesSitemap = async () => {

    const [rows] = await db.query(`
        SELECT slug
        FROM articles
        WHERE status = 'published'
        AND is_deleted = 0
        ORDER BY created_at DESC
    `);

    return rows;
};

