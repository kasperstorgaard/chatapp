var angular = require('angular');

var app = angular.module('app.feed', [
    require('angular-ui-router')
  ])
  .controller('FeedController', require('./feed.controller.js'));

require('./feed.routes.js')(app);

module.exports = app;
