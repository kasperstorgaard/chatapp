module.exports = function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.tpl.html',
      controller: 'HomeController'
    });
};
