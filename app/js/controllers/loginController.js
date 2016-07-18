(function () {
	'use strict';
	angular.module('comicStore')
	.controller('loginController', ['$scope', 'login', '$cookies', function($scope, login, $cookies) {
		$scope.message = '';
		$scope.login = function (data) {
			login(data);
			if ($cookies.get('username') === undefined)
				$scope.message = 'login_failed';
		}
    }]);
}());