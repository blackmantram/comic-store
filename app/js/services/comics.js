(function () {
	angular.module('comicStore').factory('comics', ['$http', function($http){
		return {
			getAll:function(callBack){
				$http.get('/comics').then(function(response){
					callBack(response.data);
				});
			}
		};
	}]);
}())