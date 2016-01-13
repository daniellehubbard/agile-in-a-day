'use strict';

/* Controllers */

angular.module('myApp.controllers', ['myApp.services'])
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, widget){
		$scope.widget = widget;

		$scope.close = function(){
			$modalInstance.dismiss('cancel');
		};
	});


