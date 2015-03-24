expect = chai.expect

describe 'app.modules.console', ->
  beforeEach ->
    angular.mock.module (require './index.js').name

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      controller = $controller('ConsoleController', { $scope: scope })

    describe 'intial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined
