var angular = require('angular');

var app = angular.module('app.services.socket', [])
  .factory('Socket', require('./socket-factory.js'));

module.exports = app;
