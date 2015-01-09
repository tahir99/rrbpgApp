'use strict';

describe('Controller: BookaroomCtrl', function () {

  // load the controller's module
  beforeEach(module('rrbpgAppApp'));

  var BookaroomCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookaroomCtrl = $controller('BookaroomCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
