var io = require('socket.io-client');
var R = require('ramda');

module.exports = function() {
  var socket = io('http://localhost:3030');

  var emit = R.curry(function (eventKey, data) {
    socket.emit(eventKey, JSON.stringify(data));
  });

  var listen = R.curry(function (eventKey, fn) {
    socket.on(eventKey, R.compose(fn, JSON.parse));
  });

	return {
    emit: emit,
    listen: listen
  };
};
