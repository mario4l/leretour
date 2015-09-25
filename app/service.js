angular.module('journalApp').service('saved', function ($firebase) {
    this.getReference = function () {
        return new Firebase("https://leretour.firebaseio.com/")
    }

})


angular.module('journalApp').service('authService', function ($firebase, $q) {
    this.createUsers = function (email, password) {

        var ref = new Firebase("https://leretour.firebaseio.com/");
        ref.createUser({
            email: email,
            password: password
        }, function (error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account wiht uid:", userData.uid);
            }
        });
    }
    this.userLogIn = function (email, password) {

        var dfd = $q.defer();

        var ref = new Firebase("https://leretour.firebaseio.com/");
        ref.authWithPassword({
            email: email,
            password: password
        }, function (error, authData) {
            if (error) {
                console.log("Login Failed!", error);
                dfd.resolve(error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                dfd.resolve(null, authData);
            }
        });

        return dfd.promise;
    }

});