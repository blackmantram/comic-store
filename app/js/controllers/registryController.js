(function () {
	'use strict';
	angular.module('comicStore')
	.controller('registryController', ['$scope', 'registry', function($scope, registry) {
		$scope.register = function(){
			var params = {
				username: $scope.username,
				password: $scope.password,
				name: $scope.name,
				lastname: $scope.lastname
			}
			registry(params, function(result){
				$scope.message = result;
				if (result == 'complete')
					clearScope();
			});
		}

		function clearScope() {
			$scope.username = undefined;
			$scope.password = undefined;
			$scope.name = undefined;
			$scope.lastname = undefined;
		}
    }]);
}());