/*var P = require('pointfree-fantasy');
var Either = require('data.either');
var Future = require('data.future');*/
var R = require('ramda');
var Maybe = require('pointfree-fantasy/instances/maybe');

/*
  compose: R.compose,
  mjoin: P.mjoin,
  map: R.map,
  chain: R.chain,
  Future: data.future,
  Identity: R.Identity,
  Either: Either,
  Left: Either.Left,
  Right: Either.Right
*/
var log = function(obj){
  console.log(obj);
  return obj;
};

var safeGet = R.curry(function(x,o){ return Maybe(o[x]) });

module.exports = {
  log: log,
  safeGet: safeGet
};
