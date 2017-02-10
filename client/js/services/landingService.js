(function(angular) {
	'use strict';
	angular.module('swapi')

			.service('landingService', function($http) {

				this.baseUrl = 'https://swapi.co/api/';
				
			    this.login = (submissionDetails) => {
			        return $http({
		              method: 'GET',
		              url: this.baseUrl + 'people/?search=' + submissionDetails.name
		            });
			    }

			});
})(window.angular);