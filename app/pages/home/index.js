var angular = require('angular');

require('./home.tpl.html');
require('./home.less');

module.exports = angular.module('app.pages.home', [
    require('../../modules/console').name,
    require('../../modules/feed').name
  ])
  .controller('HomeController', require('./home.controller.js'))
  .config(require('./home.routes.js'));
