(function () {
	'use strict';
	angular.module('comicStore')
	.controller('loginController', ['$scope', 'login', '$cookies', '$location', function($scope, login, $cookies, $location) {

		if ($cookies.get('username') !== undefined)
			$location.path('/comics');

		$scope.message = '';
		$scope.login = function () {
			$scope.message = '';
			var data = {username:$scope.username, password:$scope.password}
			if (data.username == undefined && data.password == undefined)
				$scope.message = 'no_data';
			else
				performLogin(data);
		}

		function performLogin(data)
		{
			login(data, function(){
				if ($cookies.get('username') === undefined)
				{
					$scope.message = 'login_failed';
				}
				else
				{
					$location.path('/comics');
				}
			});
		}
    }]);
}());