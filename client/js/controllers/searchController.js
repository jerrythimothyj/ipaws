(function(angular) {
  'use strict';
angular.module('swapi')
    .controller('searchController', function($rootScope, $scope, searchData, searchService, colorService) {
        $scope.resultData = searchData.data.results;
        $scope.bubbleColors = colorService.bubbleColors;

        $scope.searchPlanet = () => {
            if(!$rootScope.blockRequest) {
            	searchService.getData('planets', $scope.searchPlane).then((response) => {
            		$scope.resultData = response.data.results;
            	});
            }
        }
    });
})(window.angular);