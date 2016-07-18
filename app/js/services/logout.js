(function () {
	angular.module('comicStore').factory('logout', ['$cookies', function($cookies){
		return function(){
			$cookies.remove('username');
			$cookies.remove('name');
			$cookies.remove('lastname');
		};
	}]);
}())