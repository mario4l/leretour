var app = angular.module('journalApp');

app.controller('journalCtrl', function ($scope, journalService, authService, $location, $routeParams) {

	function getCurrentEntry() {
		$scope.journalText = journalService.getCurrentEntry();
	};

	$scope.updateEntry=function(journalText) {
		journalService.updateEntry(journalText);
		$location.path('journal/entries');
	};
	
	$scope.deleteEntry = function(journalText) {
		journalService.deleteEntry(journalText);
		
		$location.path('journal/entries');
	};
	
	// $scope.publicEntry=function(entry) {
	// 	journalService.publicEntry(entry);
	// 	$location.path('journal/entries/public');
	// };

	if ($routeParams.id !== "new") getCurrentEntry();

	$scope.postEntry = function (journalText) {

		journalService.postEntry(journalText);
		// alert("Journal entry saved");
		$location.path('journal/entries');
	};

	$scope.publicEntry = function(publicEntry) {
		//comment
		journalService.publicEntry(publicEntry);
		$location.path('/public');
	};




	authService.getUser().then(function (res) {
		$scope.userName = res.data.name;
	});
	

	// $scope.newEntry = function (journalText) {
	// 	if ($scope.userName = res.data.name) {
	// 		authService.logIn(user).then(function (reasponse) {
	// 			return $location.path('/journal/entries/new');
	// 		});
	// 	} else {
	// 		getCurrentEntry();
	// 	}
	// };


});