(function () {
	angular.module('comicStore').directive('navbar', function(){
		return {
			restrict: "E",
			templateUrl: 'templates/navbar.html',
		};
	});
}())