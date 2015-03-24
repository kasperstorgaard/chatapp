var R = require('ramda');

module.exports = function($scope, Socket){
  var clear = function(key, obj){
    return function(){
      obj[key] = '';
    };
  };

  var clearInput = clear('input', $scope);

  //-----------------------//
  clearInput();
  $scope.$watch('input', Socket.emit('typing'));
  $scope.submit = R.compose(clearInput, Socket.emit('message'));
};
