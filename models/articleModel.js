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

exports.getArticleById = async (id) => {

    const [rows] = await db.query(
        `SELECT *
        FROM articles
        WHERE id = ?
        LIMIT 1`,
        [id]
    );

    return rows[0];
};

exports.updateArticle = async (id, data) => {

    await db.query(

        `UPDATE articles
        SET

        title=?,
        slug=?,
        short_description=?,
        content=?,
        featured_image=?,
        meta_title=?,
        meta_description=?,
        og_title=?,
        og_image=?,
        canonical_url=?,
        keywords=?,
        is_featured=?,
        status=?,
        updated_at=NOW()

        WHERE id=?`,

        [

            data.title,
            data.slug,
            data.short_description,
            data.content,
            data.featured_image,
            data.meta_title,
            data.meta_description,
            data.og_title,
            data.og_image,
            data.canonical_url,
            data.keywords,
            data.is_featured,
            data.status,
            id

        ]
    );

};