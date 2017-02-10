(function(angular) {
  'use strict';
angular.module('swapi')
  .directive('loginPanel', function() {
    return {
      restrict: 'E',
      templateUrl: './client/views/components/loginPanel.html',
      scope: {
        returnObj: "=",
        loginSubmit: "&"
      },
      controller: 'loginPanelController'
    };
  });
})(window.angular);