var Server = require('socket.io');
var Bacon = require('baconjs');
var R = require('ramda');

var UserStore = require('./stores/user-store.js');
var MessageStore = require('./stores/message-store.js');

var ensureObj = function(val){
  return typeof val === 'string'
    ? JSON.parse(val)
    : val;
}

var decorateObj = R.curry(function(key, value, obj){
  if(obj && value){
    obj[key] = value;
  }
  return obj;
});

var bindOne = R.curry(function(eventKey, obj, sink) {
  obj.on(eventKey, R.compose(sink, decorateObj('id', obj.id), decorateObj('type', eventKey), ensureObj));
});

var binder = R.curry(function(eventKeys, obj, sink) {
  R.forEach(R.partialRight(bindOne, obj, sink), eventKeys);
});

var subStream = R.curry(function(eventKeys, stream){
  return stream.flatMap(function(instance) {
    return Bacon.fromBinder(binder(eventKeys, instance));
  });
});

//kickoff
var server = new Server();
var connections = Bacon.fromBinder(binder(['connection', 'disconnect'], server));

UserStore.kickoff(server, connections);
MessageStore.kickoff(server, subStream(['message'], connections));

server.listen(3030);
