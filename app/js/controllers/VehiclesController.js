/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('VehiclesCtrl', ['$scope', '$firebase', 'CONFIGURL', 'getVehiclesFirebaseStore', function($scope, $firebase, CONFIGURL, getVehiclesFirebaseStore)  {
        $('a[href^="#/home"]').removeClass("active");
        $('a[href^="#/vehicles"]').addClass("active");
        $('a[href^="#/contactus"]').removeClass("active");
        $('a[href^="#/contactme"]').removeClass("active");

        $scope.widgets = getVehiclesFirebaseStore();

    }]);