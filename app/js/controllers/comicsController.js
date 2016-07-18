(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicsController', ['$scope', 'comics', function($scope, comics) {
		$scope.getAllComics = function(){
			comics.getAll(function(data){
				$scope.comicsData = data;
			});
		}
    }]);
}());