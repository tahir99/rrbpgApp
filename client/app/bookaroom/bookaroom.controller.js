'use strict';

angular.module('rrbpgAppApp')
  .controller('BookaroomCtrl', function ($scope) {
    $scope.message = 'Hello';

    $scope.roomlocations = [
      {name:'EBT'},
      {name:'Waterside'},
      {name:'MSQ'},
      {name:'Stockley'}
    ];
    
    //define the time ranges
    $scope.bktimerange = [
		{time: '06:00'},
    	{time: '06:30'},
    	{time: '07:00'},
    	{time: '07:30'},
    	{time: '08:00'},
    	{time: '08:30'},
    	{time: '09:00'},
    	{time: '09:30'},
    	{time: '10:00'},
    	{time: '10:30'},
    	{time: '11:00'},
    	{time: '11:30'},
    	{time: '12:00'},
    	{time: '12:30'},
    	{time: '13:00'},
    	{time: '13:30'},
    	{time: '14:00'},
    	{time: '14:30'},
    	{time: '15:00'},
    	{time: '15:30'},
    	{time: '16:00'},
    	{time: '16:30'},
    	{time: '17:00'},
    	{time: '17:30'},
    	{time: '18:00'},
    	{time: '18:30'},
    	{time: '19:00'},
    	{time: '19:30'},
    	{time: '20:00'}
	];


  });
