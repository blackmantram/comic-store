(function () {
	angular.module('comicStore').factory('comics', ['$http', function($http){
		return {
			getAll:function(callBack){
				$http.get('/comics').then(function(response){
					callBack(response.data);
				});
			},
			getOne:function(id, callBack){
				$http.get('/comic?id='+id).then(function(response){
					callBack(response.data);
				});
			},
			create:function(comic, callBack){
				if (comic.title == undefined)
				{
					if (callBack)callBack('missing_title');
					return;
				}
				if (comic.details == undefined)
				{
					if (callBack)callBack('missing_detail');
					return;
				}
				$http.post('/comics', comic).then(function(response){
					if (callBack)callBack(response);
				});
			},
			comment:function(comment){
				$http.post('/comment?id='+comment.id, comment.comment);
			}
		};
	}]);
}())