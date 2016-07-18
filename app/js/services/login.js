(function () {
	angular.module('comicStore').factory('login', ['$cookies', '$http', function($cookies, $http){
		return function(data){
			$http.post('/login', data).then(function(response){
				$cookies.put('username', data.username);
			});
		};
	}]);
}())