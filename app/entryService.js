// var app = angular.module('journalApp');
// app.service('saveEntrySrvc', function($http, $q){
// 	this.saveEntry=function(journalText){
// 		var deferred= $q.defer()
// 		$http({
// 			method:"POST",
// 			url:'http://localhost:8765/Entry',
// 			data:journalText
// 			}).then(
// 		function(res){
// 			var journal = res
// 			deferred.resolve(journal);
// 		})
// 		return deferred.promise
// 	}
// })