var R = require('ramda');

module.exports = function($scope, socket){
	var emit = R.curry(function(key, instance, data){
	  instance.emit(key, JSON.stringify(data));
	});

	var clear = function(key, obj){
		return function(){
			obj[key] = '';
		};
	};

	var clearInput = clear('input', $scope);

	//-----------------------//
	clearInput();
	$scope.$watch('input', emit('typing', socket));
	$scope.submit = R.compose(clearInput, emit('message', socket));
};
