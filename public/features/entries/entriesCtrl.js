var app = angular.module('journalApp');
app.controller('entriesCtrl', function ($scope, journalService, $location, authService) {

	journalService.getEntries().then(function (res) {

		$scope.journalEntries = res;
	});

	$scope.setCurrentEntry = function (entry) {
		journalService.setCurrentEntry(entry);
		$location.path('/journal/entries/' + entry._id);
	};


	$scope.getCurrentEntry = function () {
		$scope.currentEntry = journalService.getCurrentEntry();
	};

	$scope.updateEntry = function (entry) {
		$scope.currentEntry = journalService.updateEntry();
	};

	authService.getUser().then(function (res) {
		$scope.userName = res.data.name;
	});


});



