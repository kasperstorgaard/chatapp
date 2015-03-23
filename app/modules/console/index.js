var angular = require('angular');

var app = angular.module('app.console', [
    require('angular-ui-router')
  ])
  .controller('ConsoleController', require('./console.controller.js'));

require('./console.routes.js')(app);

module.exports = app;