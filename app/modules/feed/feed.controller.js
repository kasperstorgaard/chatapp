var R = require('ramda');
var io = require('socket.io-client');

module.exports = function($scope, $log){
  var socket = io('http://localhost:3030');

  $scope.test = 'feed-test';
  $scope.messages = [];

  var updateList = R.curry(function(list, message){
    list.push(message);
  });

  var addMessage = R.compose($scope.$apply, updateList($scope.messages), JSON.parse);

  socket.on('message', addMessage);
};
