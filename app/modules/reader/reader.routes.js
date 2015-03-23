module.exports = function(module){
  require('./reader.tpl.html');

  module.config(function($stateProvider) {
    $stateProvider
      .state('reader', {
        url: '/reader',
        templateUrl: 'reader.tpl.html',
        controller: 'ReaderController'
      });
  });
}
