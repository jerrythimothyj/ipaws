(function(angular) {
  'use strict';
angular.module('swapi')

    .controller('navbarController', function($rootScope, $scope, $state) {

    	$scope.currState = $state;

        $rootScope.currentUser = (!$rootScope.currentUser)? sessionStorage.currentUser : $rootScope.currentUser;
        $scope.$watch('currState.current.name', function(newValue, oldValue) {
        	if(newValue == 'login') {
	        	sessionStorage.removeItem('currentUser');
	            $rootScope.currentUser = '';
                $rootScope.apiTimings = [];
	        }
        });

        $scope.logout = () => {
        	sessionStorage.removeItem('currentUser');
            $rootScope.currentUser = '';
            $rootScope.apiTimings = [];
            $state.go('login');
        }
    });
})(window.angular);