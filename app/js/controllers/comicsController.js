(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicsController', ['$scope', 'comics', '$location', function($scope, comics, $location) {
		$scope.create= function(){
			$location.path('/create');
		};
		comics.getAll(function(data){
				$scope.comicstock = data;
		});
    }]);
}());