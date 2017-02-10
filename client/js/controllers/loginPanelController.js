(function(angular) {
  'use strict';
angular.module('swapi')
    .controller('loginPanelController', function($scope) {

        $scope.loginPanelUser = (user) => {
        	$scope.loginSubmit({submissionDetails: user})
        }
    });
})(window.angular);