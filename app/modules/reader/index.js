var angular = require('angular');

var app = angular.module('app.reader', [
    require('angular-ui-router')
  ])
  .controller('ReaderController', require('./reader.controller.js'));

require('./reader.routes.js')(app);

module.exports = app;
