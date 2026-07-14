const express = require('express');

const router = express.Router();

const sitemapModel = require('../models/sitemapModel');

router.get('/sitemap.xml', async (req, res) => {

    try {

        const machines = await sitemapModel.getAllMachinesSitemap();

        res.set('Content-Type', 'text/xml');

        let xml =
'<?xml version="1.0" encoding="UTF-8"?>' +
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

// หน้าแรก
        xml +=
'<url>' +
'<loc>https://www.rodkrachaothai.com/</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>1.0</priority>' +
'</url>';
//about
        xml +=
'<url>' +
'<loc>https://www.rodkrachaothai.com/about</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';
//contact
        xml +=
'<url>' +
'<loc>https://www.rodkrachaothai.com/contact</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';
//machines
        xml +=
'<url>' +
'<loc>https://www.rodkrachaothai.com/machines</loc>' +
'<changefreq>daily</changefreq>' +
'<priority>0.9</priority>' +
'</url>';

        // หน้างาน
        if (machines && machines.length > 0) {

            machines.forEach(machine => {

                xml +=
'<url>' +
`<loc>https://www.rodkrachaothai.com/machines/${machine.slug}</loc>` +
'<changefreq>daily</changefreq>' +
'<priority>0.8</priority>' +
'</url>';

            });

        }
        // หน้าผู้ประกาศ
        if (machines && machines.length > 0) {

            machines.forEach(machine => {


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