var R = require('ramda');

module.exports = function($scope, socket){
  var updateList = R.curry(function(list, message){
    list.push(message);
  });

  //----------------//
  $scope.messages = [];
  var addMessage = R.compose($scope.$apply, updateList($scope.messages), JSON.parse);
  socket.on('message', addMessage);
};
