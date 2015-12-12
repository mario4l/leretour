var app = angular.module('journalApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/signUp', {
            templateUrl: "features/logInSignUp/signUp.html",
            controller: "loginCtrl"
        })
        .when('/logIn', {
            templateUrl: "features/logInSignUp/logIn.html",
            controller: "loginCtrl"
        })
        .when('/journal/entries/:id', {
            templateUrl: "features/journal/journal.html",
            controller: 'journalCtrl',
            resolve: {
                logInInfo: function (authService) {
                    return authService.forceLogIn();
                }
            }
        })
        .when('/about', {
            templateUrl: "features/about/about.html",
        })
        .when('/journal/entries', {
            templateUrl: "features/entries/entries.html",
            controller: 'entriesCtrl',
            resolve: {
                logInInfo: function (authService) {
                    return authService.forceLogIn();
                }
            }
        })
        .when('/public/:id', {
            templateUrl: "features/userPublic/public.html",
            controller: 'publicCtrl'

        })
        .otherwise({ redirectTo: '/signUp' });

});

