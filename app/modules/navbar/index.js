var angular = require('angular');

require('./navbar.tpl.html');

var app = angular.module('app.navbar', [])
  .directive('navbar', function(){
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'navbar.tpl.html',
      scope: {
        'items': '=',
        'title': '@'
      }
    };
  });

module.exports = app;
