(function(){
	'use strict';
	angular.module('comicStore')
	.run(['$httpBackend', 'users', function($httpBackend, $users) {

		$users.add('admin', 'admin');

		$httpBackend.whenGET( '' ).passThrough(); 
		$httpBackend.whenPOST('/login').respond(function(method, url, data, headers){
			var data = angular.fromJson(data);
			if ($users.verify(data.username, data.password))
				return [200, {}, {/*headers*/}];
			else
				return [401, {}, {}]
		});
	}])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when(
			'/', {
				templateUrl: "./templates/login.html",
				controller: "loginController"
			})
	}]);
}());