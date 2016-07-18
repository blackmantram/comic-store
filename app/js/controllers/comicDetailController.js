(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicDetailController', ['$scope', '$routeParams', 'comics', function($scope, $routeParams, comics) {
		var id = $routeParams.id;
		comics.getOne(id, function(result){
			$scope.title = result.title;
			$scope.detail = result.detail;
		});
    }]);
}());