describe('logout controller', function(){
	var controller;
	var location;
	var logoutService = {
		logout: function(){}
	};
	var scope = {};
	
	beforeEach(function(){
  		module('comicStore');
  	});
		
	beforeEach(function(){
		inject(function(_$controller_, $location){
		    controller = _$controller_;
		    location = $location;
		});
  	});

  	it('exists', function () {
		controller('logoutController', { $scope: scope })
	});

	it('calls logout service', function () {
		spyOn(logoutService, 'logout');
		controller('logoutController', { $scope: scope, logout:logoutService.logout })
		expect(logoutService.logout).toHaveBeenCalled();
	});

	it('redirects to login', function () {
		spyOn(location, 'path');
		controller('logoutController', { $scope: scope, logout:logoutService.logout })
		expect(location.path).toHaveBeenCalledWith('/');
	});
});