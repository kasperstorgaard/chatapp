var angular = require('angular');

var eStream = require('./event-stream/event-stream-directive.js');

var app = angular.module('app.shared', [])
  .directive('eventStream', require('./event-stream/event-stream-directive.js'))
  .factory('socket', require('./socket/socket-factory.js'));

module.exports = app;