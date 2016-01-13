'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
    .value('version', '0.1')
    .service('navService', function(){
        return{
            setActiveTab: setActiveTab
        };

        function setActiveTab(activeTab){
            $('#page-nav').find('a').each(function() {
                $(this).removeClass("active");
            });
            $('a[href^="#/' + activeTab +'"]').addClass("active");
        }


    })
    .factory('myResourceService', ['$resource', function($resource) {
        return {
            getResource: function() {
                return $resource;
            }
        };
    }]);
