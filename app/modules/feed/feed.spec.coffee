expect = chai.expect

view1Controller = require './feed.controller.js'

describe 'app.feed module', ->
  beforeEach ->
    angular.module 'app.feed', []
      .controller 'FeedController', view1Controller

    angular.mock.module 'app.feed'

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      controller = $controller 'FeedController', { $scope: scope }

    describe 'intial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

      it 'should modify the scope', ->
        expect(scope.test).to.equal 'feed-test'
