(function () {
	angular.module('comicStore').factory('login', ['$cookies', '$http', function($cookies, $http){
		return function(data, callback){
			$http.post('/login', data).then(function(response){
				$cookies.put('username', response.data.username);
				$cookies.put('name', response.data.name);
				$cookies.put('lastname', response.data.lastname);
				if (callback)callback();
			}, function(response){
				if (callback)callback();
			});
		};
	}]);
}())