var R = require('ramda');

module.exports = function($scope, Socket){
  var updateList = R.curry(function(list, message){
    list.push(message);
  });

  //----------------//
  $scope.messages = [];
  var addMessage = function(msg){
    updateList($scope.messages, msg);
    $scope.$apply();
  };
  Socket.listen('message', addMessage);
};
