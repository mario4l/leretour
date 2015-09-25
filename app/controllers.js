var app = angular.module('journalApp');
app.controller('homeCtrl', function ($scope) {

    $scope.message = "testing";
})

app.controller('journalCtrl', function ($firebaseObject, saved, $scope, $location) {
    var ref = saved.getReference();
    var authData = ref.getAuth();
    if (!authData) {
        $location.path("/logIn");
    }

    ref = ref.child("entries");
    var newEntryRef = ref.push({
        text: "",
        user: authData.uid

    });

    var newEntry = $firebaseObject(newEntryRef);
    newEntry.$bindTo($scope, "journalText")
})

app.controller('entryCtrl', function ($firebaseArray, saved, $scope, $location) {
    var ref = saved.getReference();
    var authData = ref.getAuth();
    if (!authData) {
        $location.path("/logIn");
    }

    ref = ref.child("entries");
    var searchedRef = ref.orderByChild("user").equalTo(authData.uid);
    $scope.journalEntries = $firebaseArray(searchedRef);
    console.log(1111111,$scope.journalEntries);
})

app.controller('signUpCtrl', function ($firebase, $scope, authService, $location) {
    $scope.signUpPage = function () {
        authService.createUsers($scope.newEmail, $scope.newPassword);
        $location.path("/logIn");
    }

})

app.controller('logInCtrl', function ($firebase, $scope, authService, $location) {
    $scope.logInPage = function () {
        authService.userLogIn($scope.userEmail, $scope.newPassword).then(function (error, authData) {
            if (error) {
                console.log(error.toString());
            } else {
                console.log("sucessfully");
                $location.path("/journal");
            }
        });

    }
})