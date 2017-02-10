(function(angular) {
  'use strict';
angular.module('swapi')
  .directive('bubbleChart', function() {
    return {
      restrict: 'E',
      templateUrl: './client/views/components/bubbleChart.html',
      scope: {
          bubbleNo: '@',
          bubbleData: '=',
          bubbleColors: '='
      },
      controller: 'bubbleChartController'
    };
  });
})(window.angular);