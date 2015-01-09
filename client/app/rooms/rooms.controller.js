'use strict';

angular.module('rrbpgAppApp')
  .controller('RoomsCtrl', function ($scope, $http, socket) {
    $scope.rooms = [];

    $scope.roomlocations = [
      {name:'EBT'},
      {name:'Waterside'},
      {name:'MSQ'},
      {name:'Stockley'}
    ];

    $http.get('/api/rooms').success(function(rooms) {
      $scope.rooms = rooms;
      socket.syncUpdates('room', $scope.rooms);
    });

    $scope.addRoom = function() {
      
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/rooms',
        { name: $scope.rmname,
          number: $scope.rmnumber,
          description: $scope.rmdescription,
          location: $scope.rmlocation,
          capacity: $scope.rmcapacity,
          picture: ''
        });

      //reset variables
      $scope.rmname = '';
      $scope.rmnumber ='';
      $scope.rmdescription ='';
      $scope.rmlocation ='';
      $scope.rmcapacity ='';

    };

    $scope.deleteRoom = function(room) {
      $http.delete('/api/rooms/' + room._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('room');
    });
  });
