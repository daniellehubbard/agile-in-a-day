/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
        $('a[href^="#/home"]').addClass("active");
        $('a[href^="#/contactus"]').removeClass("active");
        $('a[href^="#/vehicles"]').removeClass("active");
        $('a[href^="#/contactme"]').removeClass("active");

        $scope.go = function(path) {
            $location.path(path);
        }
    }]);