//global styles
require('./shared/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular.module('app', [
  require('angular-ui-router'),
  require('./pages/home').name,
  require('./modules/navbar').name
])
  .run(function($rootScope) {
    $rootScope.navigation = [
      {name: 'Home', url: 'home'}
    ];
  })
  .config(require('./app.routes.js'))

module.exports = app;
