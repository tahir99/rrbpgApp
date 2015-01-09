'use strict';

angular.module('rrbpgAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bookaroom', {
        url: '/bookaroom',
        templateUrl: 'app/bookaroom/bookaroom.html',
        controller: 'BookaroomCtrl'
      });
  });