'use strict';

describe('Neo.controller.SignIn', function () {

  // load the controller's module
  beforeEach(module('PageTurner'));

  var SignIn,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignIn = $controller('Neo.controller.SignIn', {
      $scope: scope
    });
  }));

  it('should exist an email address in the scope', function () {
    expect(scope.email).toBe('mcchae7@gmail.com');
  });
});