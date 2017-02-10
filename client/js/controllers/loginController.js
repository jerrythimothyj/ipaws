(function(angular) {
  'use strict';
angular.module('swapi')
    .controller('loginController', function($rootScope, $scope, $state, landingService) {

        $scope.loginSubmit = (user) => {
        	landingService.login(user).then((response) => {
        		let userResult;
        		if(response.data.results.length > 0) {
        			userResult = response.data.results.find((userDet) => {
		        		return (
		    				userDet.name.toLowerCase() == user.name.toLowerCase() && 
		    				userDet.birth_year == user.byear
		        		)
		        	});
	        	}
                if(angular.isObject(userResult)) {
                	sessionStorage.currentUser = user.name.toLowerCase();
                    $rootScope.currentUser = sessionStorage.currentUser;
                	$state.go('search');
                }
                else {
                    $scope.returnObj = {
                        existingUser: 0
                    };
                }
            });
        }
    });
})(window.angular);