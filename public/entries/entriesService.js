var app = angular.module('journalApp')
app.service('entriesService', function($http, $q){
	this.getEntries=function(){
		
		var deferred=$q.defer();
		$http({
			method:"GET",
			url:"http://localhost:8765/entry"
		}).then(function(res){
			console.log('entry service',res)
			
			deferred.resolve(res.data)
		
		})
		return deferred.promise;
	}
})