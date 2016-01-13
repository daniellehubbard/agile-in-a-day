/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ContactUsCtrl', ['$scope', function($scope) {
        $('a[href^="#/home"]').removeClass("active");
        $('a[href^="#/contactus"]').addClass("active");
        $('a[href^="#/vehicles"]').removeClass("active");
        $('a[href^="#/contactme"]').removeClass("active");
    }]);