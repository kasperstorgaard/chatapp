var R = require('ramda');

module.exports = function($scope, $log){
  $scope.test = 'reader-test';

  $scope.searchPhrase = {};

  var logValue = function logValue(value) {
		$log.log(value);
	};

	var mount = R.once(function() {
		$scope.searchPhrase.stream
			.onValue(logValue);
	});

	$scope.$watch('searchPhase', mount);
};
