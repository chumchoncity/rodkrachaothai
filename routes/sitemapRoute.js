const express = require('express');

const router = express.Router();

const sitemapModel = require('../models/sitemapModel');

router.get('/sitemap.xml', async (req, res) => {

    try {

        const machines = await sitemapModel.getAllMachinesSitemap();
        const articles = await sitemapModel.getAllArticlesSitemap();

        

        res.set('Content-Type', 'text/xml');

        let xml =
'<?xml version="1.0" encoding="UTF-8"?>' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

// หน้าแรก
        xml +=
'<url>' +
'<loc>https://rodkrachaothai.com/</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>1.0</priority>' +
'</url>';
//about
        xml +=
'<url>' +
'<loc>https://rodkrachaothai.com/about</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';
//contact
        xml +=
'<url>' +
'<loc>https://rodkrachaothai.com/contact</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';
//machines
        xml +=
'<url>' +
'<loc>https://rodkrachaothai.com/machines</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';

        // machines
        if (machines && machines.length > 0) {

            machines.forEach(machine => {

                xml +=
'<url>' +
`<loc>https://rodkrachaothai.com/machines/${machine.slug}</loc>` +
'<changefreq>daily</changefreq>' +
'<priority>0.8</priority>' +
'</url>';

            });

        }
        // articles
        if (articles && articles.length > 0) {

            articles.forEach(article => {

                const date = new Date(article.updated_at || article.created_at);

                const lastmod = isNaN(date.getTime())
                    ? new Date().toISOString()
                    : date.toISOString();

                xml +=
'<url>' +
`<loc>https://rodkrachaothai.com/articles/${article.slug}</loc>` +
`<lastmod>${lastmod}</lastmod>` +
'<changefreq>daily</changefreq>' +
'<priority>0.8</priority>' +
'</url>';


            });

        }

        xml += '</urlset>';

        res.send(xml);

    } catch(error) {

        console.error('Sitemap Error:', error);

        res.status(500).send('Sitemap Error');

    }

});

module.exports = router;