expect = chai.expect

describe 'app.feed module', ->
  beforeEach ->
    angular.mock.module (require './index.js').name

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      controller = $controller 'FeedController', { $scope: scope }

    describe 'intial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined
