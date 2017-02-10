(function(angular) {
	'use strict';
	angular.module('swapi')

			.service('searchService', function($http) {

				this.baseUrl = 'https://swapi.co/api/';
				
			    this.getData = (type, keyword) => {
			    	if(keyword) {
			    		return $http({
			              	method: 'GET',
			              	url: this.baseUrl + type + '/?search=' + keyword
			            });
			    	} else {
			    		return $http({
		              		method: 'GET',
		              		url: this.baseUrl + type + '/'
		            	});
			    	}
			    }

			});
})(window.angular);