var app = angular.module('journalApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    
    .when('/signUp', {
        templateUrl: "logInSignUp/signUp.html",
        controller: "loginCtrl"
    })
    .when('/logIn', {
        templateUrl: "logInSignUp/logIn.html",
        controller: "loginCtrl"
    })
    .when('/journal', {
        templateUrl: "journal/journal.html",
        controller: 'journalCtrl'
    })
    .when('/about',{
        templateUrl: "about/about.html",
    })
    .when('/entries',{
        templateUrl: "entries/entries.html",
        controller: 'entriesCtrl'
    })
    .otherwise({redirectTo:'/signUp'})
    
})


