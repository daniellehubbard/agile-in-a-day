/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ContactMeCtrl', ['$scope', '$modal', function($scope, $modal) {
        $('a[href^="#/home"]').removeClass("active");
        $('a[href^="#/contactus"]').removeClass("active");
        $('a[href^="#/vehicles"]').removeClass("active");
        $('a[href^="#/contactme"]').addClass("active");

        $scope.contactinfo = {
            FirstName: ''
        };
        $scope.contactMe = function(widget){
            var modalInstance = $modal.open({
                templateUrl: 'app/partials/modalcontent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    widget: function() {
                        return widget;
                    }
                }
            });
        };
    }]);