var io = require('socket.io-client');

module.exports = function() {
	return io('http://localhost:3030');
};