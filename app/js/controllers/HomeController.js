/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('HomeCtrl', ['$scope', '$location', 'navService', function($scope, $location, navService) {
        navService.setActiveTab("home");

        $scope.go = function(path) {
            $location.path(path);
        }
    }]);