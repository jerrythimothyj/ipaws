(function(angular) {
	"use strict";

	angular.module('swapi')
		.factory ('loaderInterceptorFactory', function ($q, $rootScope, $log) {
			
			let numLoadings = 0;

			return {
		        request: function (config) {
		        	if(config.url.indexOf('/api/') != -1) {
		        		let d = new Date();
		        		$rootScope.apiTimings.push(d.getTime());
		        		
		        		if(
		        			$rootScope.apiTimings.length > 15 && 
		        			sessionStorage.currentUser.toLowerCase() != 'luke skywalker' &&  
		        			(($rootScope.apiTimings[15] - $rootScope.apiTimings[0])/1000)/60
		        		) {
		        			$rootScope.blockRequest = 1;
		        		}
		        	}

		            numLoadings++;

		            // Show loader
		            $rootScope.$broadcast("loader_show");
		            return config || $q.when(config)

		        },
		        response: function (response) {
		            if ((--numLoadings) === 0) {
		                // Hide loader
		                $rootScope.$broadcast("loader_hide");
		            }

		            return response || $q.when(response);

		        },
		        responseError: function (response) {
		            if (!(--numLoadings)) {
		                // Hide loader
		                $rootScope.$broadcast("loader_hide");
		            }

		            return $q.reject(response);
		        }
		    };
		})
})(window.angular);