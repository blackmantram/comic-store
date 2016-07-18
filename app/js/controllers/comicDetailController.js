(function () {
	'use strict';
	angular.module('comicStore')
	.controller('comicDetailController', ['$scope', '$routeParams', 'comics', function($scope, $routeParams, comics) {
		var id = $routeParams.id;
		$scope.comments = [];
		$scope.comment = function(){
			if ($scope.text.trim() != '')
			{
				if ($scope.comments == undefined)
					$scope.comments = [];
				$scope.comments.push($scope.text);
				comics.comment({id:id, comment:$scope.text});
			}
			$scope.text = undefined;
		}
		comics.getOne(id, function(result){
			$scope.title = result.title;
			$scope.detail = result.detail;
			$scope.comments = result.comments;
		});
    }]);
}());