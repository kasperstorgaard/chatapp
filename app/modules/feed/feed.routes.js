module.exports = function(module){
  require('./feed.tpl.html');

  module.config(function($stateProvider) {
    $stateProvider
      .state('feed', {
        url: '/feed',
        templateUrl: 'feed.tpl.html',
        controller: 'FeedController'
      });
  });
}
