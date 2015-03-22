var expect = chai.expect;

var F = require('./functional-utils.js');
var P = require('pointfree-fantasy');
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('pointfree-fantasy/instances/identity').Identity

describe('functional utils', function() {
  describe('log', function(){
    it('should return value', function() {
      expect(F.log('test')).to.equal('test');
    });
  });

  describe('safeGet', function(){
    it('should work with map', function() {
      var user = { firstName: 'tom'};
      var getFirstName = P.compose(P.map(F.add('my name is ')), F.safeGet('firstName'));
      expect(getFirstName(user)).to.deep.equal(Maybe.Just('my name is tom'));
    });

    it('should work when no attr is present', function() {
      var user = {};
      var getFirstName = P.compose(P.map(F.add('my name is ')), F.safeGet('firstName'));
      expect(getFirstName(user)).to.deep.equal(Maybe.Nothing());
    });
  });
});
