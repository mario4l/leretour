app.directive('signOutButton', function () {
    return {
        template: "<button ng-click='logOut()' class='journallog-in'>Sign Out</button>",
        controller: function ($scope, $firebase, $location) {
            $scope.logOut = function () {
                var ref = new Firebase("https://leretour.firebaseio.com/");
                ref.unauth();
                $location.path("/logIn");
                

            }


        }

    }
})

app.directive('ngEnter', function () {
    return function (scope, element, attrs){
        element.bind("keydown keypress", function(event){
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        })
    }
})