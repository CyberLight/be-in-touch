var routes = require('../../routes'),
    path = require('path');

module.exports = function(app, config){
    app.get('/', routes.index);
}
