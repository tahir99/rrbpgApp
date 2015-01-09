'use strict';

angular.module('rrbpgAppApp')
  .controller('MybookingsCtrl', function ($scope, $http, socket) {
  $scope.mybookings = [];

	$http.get('/api/bookings/:id/id:5488eb6331b177107b734129').success(function(bookings) {
      $scope.mybookings = bookings;
      socket.syncUpdates('booking', $scope.mybookings);
    });

    $scope.deleteBooking = function(booking) {
      $http.delete('/api/bookings/' + booking._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('booking');
    });

  });
