(function(angular){
	'use strict';
	angular.module('swapi')
			.directive("loader", function ($rootScope) {
			    return function ($scope, element, attrs) {
			        $scope.$on("loader_show", function () {
			            return element.show();
			        });
			        return $scope.$on("loader_hide", function () {
			            return element.hide();
			        });
			    };
			});


})(window.angular);