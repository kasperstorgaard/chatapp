var Server = require('socket.io');
var Bacon = require('baconjs');
var R = require('ramda');

var io = new Server();

var originObj = R.curry(function(origin, data){
  return {originId: origin.id, data: data};
});

var binder = R.curry(function(eventKey, obj, callback) {
  obj.on(eventKey, callback);
});

var emit = R.curry(function(eventKey, obj, data){
  obj.emit(eventKey, JSON.stringify(data));
});

var connections = Bacon.fromBinder(binder('connection', io));

var messages = connections.flatMap(function(socket) {
  return Bacon.fromBinder(binder('message', socket), R.compose(originObj(socket), JSON.parse));
});

//kickoff
messages.onValue(emit('message', io));
io.listen(3030);