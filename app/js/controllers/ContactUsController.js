/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ContactUsCtrl', ['$scope', 'navService', function($scope, navService) {
        navService.setActiveTab("contactus");
    }]);