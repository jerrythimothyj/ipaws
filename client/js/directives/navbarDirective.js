(function(angular){
	'use strict';
	angular.module('swapi')
			.directive('navbar', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/navbar.html',
					controller: 'navbarController'
				}
			});
})(window.angular);