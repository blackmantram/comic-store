(function () {
	angular.module('comicStore').factory('registry', ['$http', function($http){
		return function(data, callback){
			if (data.username == undefined || data.username.trim() == '')
			{
				callback('missing_username');
				return;
			}
			if (data.password == undefined)
			{
				callback('missing_password');
				return;
			}
			$http.post('/register', data).then(function(){
				callback();
			});
		};
	}]);
}())