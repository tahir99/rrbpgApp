'use strict';

angular.module('rrbpgAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mybookings', {
        url: '/mybookings',
        templateUrl: 'app/mybookings/mybookings.html',
        controller: 'MybookingsCtrl'
      });
  });