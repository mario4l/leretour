var app = angular.module('journalApp');
app.controller('entriesCtrl', function($scope, entriesService){
	
	entriesService.getEntries().then(function(res){
		
		$scope.journalEntries=res;
	})
})