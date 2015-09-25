var app = angular.module('journalApp');

app.directive('navBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/view/navBar.html'
    }
})

app.directive('hover', function () {
    return {
        restrict: 'A',
        scope: {
            addClass: '@',
            removeClass: '@'

        },
        link: function (scope, elem, attrs) {
            elem.on('mouseover', function () {
                console.log(elem);
                elem.addClass(scope.addClass)
            })
            elem.on('mouseout', function () {
                elem.removeClass(scope.addClass)
            })
        }
    }
})

app.directive('signOutButton', function () {
    return {
        template: "<button ng-click='logOut()' class='log-in'>Sign Out</button>",
        controller: function ($scope, $firebase, $location) {
            $scope.logOut = function () {
                var ref = new Firebase("https://leretour.firebaseio.com/");
                ref.unauth();
                $location.path("/logIn");
                

            }


        }

    }
})