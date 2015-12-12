var app = angular.module('journalApp');
app.service('authService', function ($http, $location) {


	this.signUp = function (user) {
		return $http({
			method: 'POST',
			url: '/registration',
			data: user
		});
	};
	
	//tried logInPage
	this.logIn = function (user) {
		return $http({
			method: 'POST',
			url: '/login',
			data: user
		}).then(function (res) {
			return res;
		}, function (err) {
			if (err.status === 401) {
				$location.path('/logIn');
			}
		});
	};
	
	this.getUser = function () {

		return $http({
			method: 'GET',
			url: '/users',
		}).then(function (res) {
			console.log(res);
			return res;
		});
	};
	
	this.forceLogIn = function () {
		console.log('forcing login');
			return $http({
				method: "GET", url: "/currentUser"
			}).then(function(res){
				console.log('They passed');
				return res;
			}, function(err) {
				console.log('they failed');
				$location.path('/signUp');
			});
	};
});