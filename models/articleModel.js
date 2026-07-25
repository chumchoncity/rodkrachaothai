const db = require("../config/db");


exports.getAllArticles = async () => {

    const [rows] = await db.query(`
        SELECT
            id,
            title,
            slug,
            featured_image,
            view_count,
            status,
            published_at,
            created_at
        FROM articles
        ORDER BY created_at DESC
    `);

    return rows;

};
exports.getAllArticlesPublic = async () => {

    const [rows] = await db.query(`
        SELECT *
        FROM articles
        WHERE status = 'published'
        ORDER BY created_at DESC
    `);

    return rows;

};

exports.articleDetail = async (slug) => {

    const [rows] = await db.query(`
        SELECT *
        FROM articles
        WHERE slug = ?
        LIMIT 1
    `, [slug]);

    return rows[0];

}


exports.latestArticles = async () => {

    const [rows] = await db.query(`
        SELECT *
        FROM articles
        WHERE status='published'
        ORDER BY created_at DESC
        LIMIT 5
    `);

    return rows;

}