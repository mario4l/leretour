var app = angular.module('journalApp');

app.controller('publicCtrl', function ($scope, journalService, authService, $location, $routeParams) {
	// console.log('The Public Entry: ', publicEntry);
	// $scope.journalText = publicEntry;
	journalService.getPublicEntry($routeParams.id).then(function(res) {
		console.log("Yay: ", res.data);
		$scope.journalText = res.data;
	})
	
	
	
	
	
});