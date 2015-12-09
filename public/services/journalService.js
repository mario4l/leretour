var app = angular.module('journalApp')
app.service('journalService', function ($http, $q) {
	this.postEntry = function (journalText) {

		return $http({
			method: "POST",
			url: "/entry",
			data: journalText
		});
	};
	this.updateEntry = function (journalText) {

		return $http({
			method: "PUT",
			url: "/entry/" + journalText._id,
			data: journalText
		})
			.then(function (res) {
				console.log(res);
			});
	};
	this.getEntries = function () {

		var deferred = $q.defer();
		$http({
			method: "GET",
			url: "/entry"
		}).then(function (res) {
			console.log('entry service', res);

			deferred.resolve(res.data);

		});
		return deferred.promise;
	};

	this.deleteEntry = function (journalText) {

		return $http({
			method: "DELETE",
			url: "/entry/" + journalText._id
		})
			.then(function (res) {
				console.log(res);
			});
	};
	
	this.publicEntry = function (journalText){
		
		return $http({
			method: "GET",
			url: "/entry/" + journalText._id,
			data: journalText
		})
			.then(function (res) {
				console.log(res);
			});
	};
	

	var state = {}

	this.setCurrentEntry = function (userEntry) {
		state.entry = userEntry;
	};

	this.readCurrentEntry = function (userEntry) {
		state.entry = userEntry;
	};

	this.getCurrentEntry = function () {
		return state.entry;
	};
	
	this.publicEntry = function (userEntry) {
		state.entry = userEntry;
	};

});

