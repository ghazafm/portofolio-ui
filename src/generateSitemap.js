const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap'); // Updated import

// Array of URLs to be included in the sitemap
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

// Create a writable stream to write the sitemap to a file
const sitemapStream = new SitemapStream({ hostname: 'https://ui.fauzanghaza.com' });

// Create the sitemap by adding URLs to the stream
sitemapUrls.forEach(url => {
    sitemapStream.write({ url });
});

// End the stream and convert it to a promise
streamToPromise(sitemapStream)
    .then(sm => {
        // Write the sitemap to the 'public' directory
        fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), sm);
        console.log('Sitemap generated successfully!');
    })
    .catch(err => {
        console.error('Error generating sitemap:', err);
    })
    .finally(() => {
        sitemapStream.end();
    });