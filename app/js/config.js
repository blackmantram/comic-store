(function(){
	'use strict';
	angular.module('comicStore')
	.run(['$httpBackend', 'users', 'comicstock', function($httpBackend, $users, $comicstock) {

		$users.add('admin', 'admin', 'admin', 'admin');

		$comicstock.add(1, 'superman', 'the man of steel');
		$comicstock.add(2, 'batman', 'the dark knoght');
		$comicstock.add(3, 'green lantern', 'the guardian fo the galaxy');
		$comicstock.add(4, 'hulk', 'the great beast');

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
			return [200, {}, {}]
		});

		$httpBackend.whenGET('/comics').respond(function(method, url, data, headers){
			return [200, $comicstock.getAll(), {}]
		});

		$httpBackend.whenGET(new RegExp('\\/comic\\?id=[0-9]+')).respond(function(method, url, data, headers){
			var queryMatch = /^[^#]*\?([^#]*)/.exec(url);
  			var query = queryMatch ? queryMatch[1] : "";
			var id = query.split('=')[1];
			return [200, $comicstock.get(id), {}]
		});

		$httpBackend.whenPOST('/comics').respond(function(method, url, data, headers){
			var id = $comicstock.getAll().length+1;
			var data = angular.fromJson(data);
			$comicstock.add(id, data.title, data.details);
			return [200, $comicstock.getAll(), {}]
		});

		$httpBackend.whenGET( '' ).passThrough(); 
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
			}).when(
			'/comics', {
				templateUrl: "./templates/comicstock.html",
				controller: "comicsController"
			}).when(
			'/comicdetail/:id', {
				templateUrl: "./templates/comicdetail.html",
				controller: "comicDetailController"
			}).when(
			'/logout', {
				template: "",
				controller: "logoutController"
			}).when(
			'/create', {
				templateUrl: "./templates/createcomic.html",
				controller: "comicCreateController"
			})
	}]);
}());