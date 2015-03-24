var angular = require('angular');

require('./console.tpl.html');
require('./console.less');

module.exports = angular.module('app.modules.console', [
	  require('../../shared/services/socket').name
  ])
  .controller('ConsoleController', require('./console.controller.js'))
  .directive('console', function(){
    return {
      restrict: 'EA',
      replace: true,
      controller: 'ConsoleController',
      templateUrl: 'console.tpl.html'
    };
  });
