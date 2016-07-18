(function () {
	angular.module('comicStore').factory('registry', ['$http', function($http){
		return function(data, callback){
			if (isInvalid(data.name))
			{
				callback('missing_name');
				return;
			}
			if (isInvalid(data.username))
			{
				callback('missing_username');
				return;
			}
			if (isInvalid(data.password))
			{
				callback('missing_password');
				return;
			}
			if (isInvalid(data.lastname))
			{
				callback('missing_lastname');
				return;
			}
			$http.post('/register', data).then(function(){
				callback('complete');
			});
		};

		function isInvalid(string)
		{
			return string == undefined || string.trim() == '';
		}
	}]);
}())