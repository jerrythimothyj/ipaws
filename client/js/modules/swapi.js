(function(angular) {
  'use strict';
angular.module('swapi', ['ui.router'])
    
    .config(function($httpProvider) {
      $httpProvider.interceptors.push ('loaderInterceptorFactory');
    })

    .config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/login");
    
        $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: "./client/views/pages/login.html",
          controller: 'loginController'
        })
        .state('search', {
          url: "/search",
          templateUrl: "./client/views/pages/search.html",
          controller: 'searchController',
          resolve: {
            searchData: function(searchService) {
              return searchService.getData('planets');
            }
          }
        })
    })

    .run(function($state, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.apiTimings = [];
        if(sessionStorage.currentUser == undefined) {
          window.location.href = '#/';
        }
    });
    

})(window.angular);