var io = require('socket.io-client');
var R = require('ramda');

module.exports = function($scope){
	var emit = R.curry(function(key, instance, data){
	  instance.emit(key, JSON.stringify(data));
	});

	var clear = function(obj, key){
		return function(){
			obj[key] = '';
		}
	};

	var clearInput = clear($scope, 'input');

	//-----------------------//
	var socket = io('http://localhost:3030');
	clearInput();
	$scope.$watch('input', emit('typing', socket));
	$scope.submit = R.compose(clearInput, emit('message', socket));
};
