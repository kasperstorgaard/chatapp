expect = chai.expect

view1Controller = require './console.controller.js'

describe 'app.console module', ->
  beforeEach ->
    angular.module 'app.console', []
      .controller 'ConsoleController', view1Controller

    angular.mock.module 'app.console'

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      controller = $controller 'ConsoleController', { $scope: scope }

    describe 'intial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

      it 'should modify the scope', ->
        expect(scope.test).to.equal 'console-test'
