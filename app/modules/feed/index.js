var angular = require('angular');

require('./feed.tpl.html');
require('./feed.less');

module.exports = angular.module('app.modules.feed', [
    require('../../shared/services/socket').name
  ])
  .controller('FeedController', require('./feed.controller.js'))
  .directive('feed', function(){
    return {
      restrict: 'EA',
      replace: true,
      controller: 'FeedController',
      templateUrl: 'feed.tpl.html'
    };
  });
