expect = chai.expect;

eventStreamDirective = require './event-stream-directive.js'

html = '<div class="btn" event-stream="buttonClicks" data-event-type="click"></div>'

describe 'event-stream', ->

  beforeEach ->
    angular.module 'app.shared', []
      .directive 'eventStream', eventStreamDirective

    angular.mock.module 'app.shared'

  describe 'directive', ->
    controller = null
    scope = null
    element = null

    beforeEach inject ($compile, $rootScope) ->
      scope = $rootScope.$new()
      scope.buttonClicks = {};
      element = $compile(html)(scope)
      $rootScope.$digest()

    describe 'intial', ->
      it 'should exist', ->
        expect(element).to.not.be.undefined

    describe 'scope', ->
      it 'should have buttonClicks property', ->
        expect(scope.buttonClicks).to.not.be.undefined

    describe 'stream property', ->
      it 'should have a "stream" property', ->
        expect(scope.buttonClicks.stream).to.not.be.undefined
      it 'should be a stream', ->
        expect(scope.buttonClicks.stream.onValue).to.not.be.undefined

    describe 'events', ->
      it 'add an event to stream on directive event fired', ->
        element.triggerHandler "click"
        expect(scope.buttonClicks.stream.last()).to.not.be.undefined
