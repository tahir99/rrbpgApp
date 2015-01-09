'use strict';

angular.module('rrbpgAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rooms', {
        url: '/rooms',
        templateUrl: 'app/rooms/rooms.html',
        controller: 'RoomsCtrl'
      });
  });