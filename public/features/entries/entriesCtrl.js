var app = angular.module('journalApp');
app.controller('entriesCtrl', function ($scope, journalService, $location, authService) {
	
	var user = {};
	authService.getUser().then(function(result) {
		console.log('GOT USER', result.data);
		user = result.data;
	})

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

	$scope.publicEntry = function (entry) {
		console.log("yo fire", entry);
		console.log('you fired: ', user._id);
		var publicEntry = {
			creator: user._id,
			entry: entry._id
		};
		journalService.postPublicPost(publicEntry).then(function (res) {
			console.log("Going To : ", res.data._id);
			$location.path('/public/' + res.data._id);

		});
	};


});



