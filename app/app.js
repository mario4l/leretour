var app = angular.module('journalApp', ['firebase','ngRoute','textAngular']);

app.config(function($routeProvider){
    $routeProvider
    .when('/logIn', {
        templateUrl: "app/view/logIn.html",
        controller: 'logInCtrl'
    })
    .when('/signUp', {
        templateUrl: "app/view/signUp.html",
        controller: 'signUpCtrl'
    })
    .when('/journal',{
        templateUrl: "app/view/journal.html",
        controller: 'journalCtrl'
    })
    .when('/about',{
        templateUrl: "app/view/about.html",
    })
    .when('/entries',{
        templateUrl: "app/view/entries.html",
        controller: 'entryCtrl'
    })
    .otherwise({redirectTo:'/signUp'})
    
})


