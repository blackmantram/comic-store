(function(){
	'use strict';
	angular.module('comicStore')
	.run(['$httpBackend', 'users', function($httpBackend, $users) {

		$users.add('admin', 'admin', 'admin', 'admin');

		$httpBackend.whenGET( '' ).passThrough(); 
		$httpBackend.whenPOST('/login').respond(function(method, url, data, headers){
			var data = angular.fromJson(data);
			var user = $users.get(data.username, data.password);
			if (user)
				return [200, user, {/*headers*/}];
			else
				return [401, {}, {}]
		});

		$httpBackend.whenPOST('/register').respond(function(method, url, data, headers){
			var data = angular.fromJson(data);
			$users.add(data.username, data.password, data.name, data.lastname);
			console.log($users.getAll());
			return [200, {}, {}]
		});
	}])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when(
			'/', {
				templateUrl: "./templates/login.html",
				controller: "loginController"
			}).when(
			'/registry', {
				templateUrl: "./templates/registry.html",
				controller: "registryController"
			})
	}]);
}());