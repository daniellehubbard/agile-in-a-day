/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ChatCtrl', ['$scope', '$modal', function($scope, $modal){
        $scope.chat = function(widget){
            var modalInstance = $modal.open({
                templateUrl: 'app/partials/modalchatcontent.html',
                controller: 'ChatModalInstanceCtrl',
                width: 50,
                resolve: {
                    widget: function() {
                        return widget;
                    }
                }
            });
        }
    }]);