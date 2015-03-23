module.exports = function(app){
  app.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/console");
  });
}
