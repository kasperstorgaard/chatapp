var io = require('socket.io-client');
var R = require('ramda');

module.exports = function($scope){
	var socket = io('http://localhost:3030');

	$scope.input = {};
	$scope.test = 'console-test';

	var emit = R.curry(function(key, data){
	  socket.emit(key, JSON.stringify(data));
	});

	var targetValue = function(event) {
		return event.target.value;
	};

	var mount = R.once(function() {
		$scope.input.stream
			.onValue(R.compose(emit('message'), targetValue));
	});

	$scope.$watch('searchPhase', mount);

	socket.on('message', function(data) {
		console.log(data)
	});
};
