expect = chai.expect

view1Controller = require './reader.controller.js'

describe 'app.reader module', ->
  beforeEach ->
    angular.module 'app.reader', []
      .controller 'ReaderController', view1Controller

    angular.mock.module 'app.reader'

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($controller, $rootScope) ->
      scope = $rootScope.$new()
      controller = $controller 'ReaderController', { $scope: scope }

    describe 'intial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

      it 'should modify the scope', ->
        expect(scope.test).to.equal 'reader-test'
