//global styles
require('./less/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular.module('app', [
  require('angular-ui-router'),
  require('./shared').name,
  require('./modules/console').name,
  require('./modules/feed').name
]);

require('./app.routes.js')(app);

module.exports = app;
