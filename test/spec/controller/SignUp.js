'use strict';

describe('Neo.controller.SignUp', function () {

  // load the controller's module
  beforeEach(module('PageTurner'));

  var SignUp,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignUp = $controller('Neo.controller.SignUp', {
      $scope: scope
    });
  }));

  it('should exist an password address in the scope', function () {
    expect(scope.password).toBe('password');
  });
});