'use strict';

describe('Controller: MybookingsCtrl', function () {

  // load the controller's module
  beforeEach(module('rrbpgAppApp'));

  var MybookingsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MybookingsCtrl = $controller('MybookingsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
