var siteAssets = require('./site-assets'),
    siteBody = require('./site-body'),
    siteLogging = require('./site-logging'),
    siteRoutes = require('./site-routes');

module.exports = function(app, config) {
    siteAssets(app, config);
    siteBody(app, config);
    siteLogging(app, config);
    siteRoutes(app, config);
};
