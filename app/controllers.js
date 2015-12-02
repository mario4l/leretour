// var app = angular.module('journalApp');
// app.controller('homeCtrl', function ($scope, saveEntrySrvc) {
   


//     $scope.saveEntry=function(journalText){
//         saveEntrySrvc.saveEntry().then(function(res){
//             console.log('hi')
//         })
//     }
       
//     $scope.message = "testing";
// })

// app.controller('journalCtrl', function ( saved, $scope, $location) {


// });

// // app.controller('entryCtrl', function ($scope, $location,saveEntrySrvc) {
    
   
// // })

// app.controller('signUpCtrl', function ($firebase, $scope, authService, $location) {
//     $scope.signUpPage = function () {
//         authService.createUsers($scope.newEmail, $scope.newPassword);
//         $location.path("/logIn");
//     }

// })

// app.controller('logInCtrl', function ($firebase, $scope, authService, $location) {
//     $scope.logInPage = function () {
//         authService.userLogIn($scope.userEmail, $scope.newPassword).then(function (error, authData) {
//             if (error) {
//                 console.log(error.toString());
//             } else {
//                 console.log("sucessfully");
//                 $location.path("/journal");
//             }
//         });

//     }
// })