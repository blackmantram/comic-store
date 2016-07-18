(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicCreateController', ['$scope', 'comics', '$location', function($scope, comics, $location) {
		$scope.create = function() {
			var comic = {
				'title':$scope.title,
				'details':$scope.details
			}
			comics.create(comic, function(){
				$location.path('/comics');
			});
		}
    }]);
}());