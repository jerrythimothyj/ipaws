(function(angular) {
	'use strict';
	angular.module('swapi')

			.service('colorService', function() {

				this.bubbleColors = {
					bubble0: '#8000ff',
					bubble1: '#ff8000',
					bubble2: '#ffbf00',
					bubble3: '#ffff00',
					bubble4: '#80ff00',
					bubble5: '#00ff80',
					bubble6: '#00bfff',
					bubble7: '#4000ff',
					bubble8: '#ff00ff',
					bubble9: '#ff0000'
		        }

			});
})(window.angular);