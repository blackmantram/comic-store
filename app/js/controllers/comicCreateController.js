(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicCreateController', ['$scope', 'comics', function($scope, comics) {
		$scope.create = function() {
			var comic = {
				'title':$scope.title,
				'details':$scope.details
			}
			comics.create(comic);
		}
    }]);
}());