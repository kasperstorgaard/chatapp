expect = chai.expect;

F = require './functional-utils.js'
Maybe = require 'pointfree-fantasy/instances/maybe'
Identity = require('pointfree-fantasy/instances/identity').Identity
R = require 'ramda'

getFirstName = R.compose(R.map(R.add 'my name is '), F.safeGet 'firstName')

describe 'functional utils', ->
  describe 'log', ->
    it 'should return value', ->
      expect(F.log('test')).to.equal 'test'

  describe 'safeGet', ->
    it 'should work with map', ->
      user = { firstName: 'tom' }
      expect(getFirstName user).to.deep.equal Maybe.Just 'my name is tom'

    it 'should work when no attr is present', ->
      user = {}
      expect(getFirstName user).to.deep.equal Maybe.Nothing()
