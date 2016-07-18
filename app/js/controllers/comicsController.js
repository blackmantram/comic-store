(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicsController', ['$scope', 'comics', function($scope, comics) {
		comics.getAll(function(data){
				$scope.comicstock = data;
		});
    }]);
}());