var app = angular.module('journalApp')
app.service('journalService', function($http){
	this.postEntry=function(journalText){
		
		return $http({
			method:"POST",
			url:"http://localhost:8765/entry",
			data:journalText
		})
	}
})