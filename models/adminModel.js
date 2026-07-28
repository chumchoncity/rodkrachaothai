const db = require("../config/db");


//admin/dashboard:total
exports.getTotalArticles = async () => {
    const [rows] = await db.query(`
        SELECT COUNT(*)
        AS total
        FROM articles
        WHERE is_deleted = 0
    `);

    return rows[0].total;
};
//admin/dashboard:published
exports.getPublishedArticles = async () => {
    const [rows] = await db.query(`
        SELECT COUNT(*)
        AS total
        FROM articles
        WHERE is_deleted = 0
        AND status = 'published'
    `);

    return rows[0].total;
};
//admin/dashboard:published
exports.getTotalViewArticles = async () => {
    const [rows] = await db.query(`
        SELECT COALESCE(SUM(view_count), 0)
        AS totalViews
        FROM articles
        WHERE is_deleted = 0
        AND status = 'published'
    `);

    return rows[0].totalViews;
};