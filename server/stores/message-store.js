var R = require('ramda');

var emit = R.curry(function(eventKey, obj, data){
  obj.emit(eventKey, JSON.stringify(data));
});

var kickoff = function(server, stream) {
  stream.onValue(emit('message', server));
};

module.exports = {
  kickoff: kickoff
};
