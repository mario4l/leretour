var app = angular.module('journalApp');
app.controller('journalCtrl', function($scope, journalService, authService){
	$scope.postEntry=function(journalText){
		journalService.postEntry(journalText)
		
	}
	authService.getUser().then(function (res) {
		$scope.userName = res.data.name;
	}
		)	
	
})