/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('VehiclesCtrl', ['$scope', '$firebase', 'CONFIGURL', 'getVehiclesFirebaseStore', 'navService',
        function($scope, $firebase, CONFIGURL, getVehiclesFirebaseStore, navService)  {
        navService.setActiveTab("vehicles");

        $scope.widgets = getVehiclesFirebaseStore();

    }]);