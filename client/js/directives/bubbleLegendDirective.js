(function(angular) {
  'use strict';
angular.module('swapi')
  .directive('bubbleLegend', function() {
    return {
      restrict: 'E',
      templateUrl: './client/views/components/bubbleLegend.html',
      scope: {
          bubbleNo: '@',
          bubbleData: '=',
          bubbleColors: '='
      }
    };
  });
})(window.angular);