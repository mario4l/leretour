var app = angular.module('journalApp')
app.controller('loginCtrl', function ($scope, authService, $location) {

	$scope.signUp = function (user) {
		if ($scope.user.password === $scope.password2) {


			authService.signUp(user).then(function (response) {
				console.log(response);
				// alert("Thanks for signing up");
				return $location.path('/journal/entries/new');
			});
		} else {
			alert("Oops make sure your passwords match! =]");
		}
	};
	$scope.logIn = function (user) {


			authService.logIn(user).then(function (response) {
				console.log(response);
				// alert("Thanks for logging in");
				return $location.path('/journal/entries/new');
			});
		
	};

});


