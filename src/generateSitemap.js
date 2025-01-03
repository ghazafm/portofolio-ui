const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

const sitemapUrls = [
    'https://ui.fauzanghaza.com/',
    'https://ui.fauzanghaza.com/#skills',
    'https://ui.fauzanghaza.com/#experience',
    'https://ui.fauzanghaza.com/#opensource',
    'https://ui.fauzanghaza.com/#achievements',
    'https://ui.fauzanghaza.com/#blogs',
    'https://ui.fauzanghaza.com/#talks',
    'https://ui.fauzanghaza.com/#resume',
    'https://ui.fauzanghaza.com/#contact',
];

const sitemapXML = sitemap.createSitemap({
    hostname: 'https://ui.fauzanghaza.com/',
    urls: sitemapUrls.map(url => ({ url })),
}).toString();

fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sitemapXML);
