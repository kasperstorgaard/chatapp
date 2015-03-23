module.exports = function(module){
  require('./console.tpl.html');

  module.config(function($stateProvider) {
    $stateProvider
      .state('console', {
        url: '/console',
        templateUrl: 'console.tpl.html',
        controller: 'ConsoleController'
      });
  });
}
