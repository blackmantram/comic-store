(function () {
	'use strict';
	angular.module('comicStore')
	.controller('logoutController', ['$scope', 'logout', '$location', function($scope, logout, $location) {
		logout();
		$location.path('/');
    }]);
}());