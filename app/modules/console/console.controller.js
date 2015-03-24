var R = require('ramda');

module.exports = function($scope, Socket){
  var clear = function(key, obj){
    return function(){
      obj[key] = '';
    };
  };

  var clearInput = clear('input', $scope);

  var dataObj = function(val){
    return {data: val};
  };

  //-----------------------//
  clearInput();
  $scope.$watch('input', R.compose(Socket.emit('typing'), dataObj));
  $scope.submit = R.compose(clearInput, Socket.emit('message'), dataObj);
};
