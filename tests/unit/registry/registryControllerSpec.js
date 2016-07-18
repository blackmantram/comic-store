describe('registry controller', function(){
	var controller;
	var registryServiceMock = {
		register: function(params, callback){
			callback('');
		}
	};
	var scope = {};

	beforeEach(function(){
  		module('comicStore');
  	});
		
	beforeEach(function(){
		inject(function(_$controller_){
		    controller = _$controller_;
		});
  	});

  	it('exists', function () {
		controller('registryController', { $scope: scope, registry: registryServiceMock});
	});

	it('calls registry service', function () {
		scope.username = 'username';
		scope.password = 'password';
		scope.name = 'name';
		scope.lastname = 'lastname';
		var params = {
			username: 'username',
			password: 'password',
			name: 'name',
			lastname: 'lastname'
		}
		spyOn(registryServiceMock, 'register');
		controller('registryController', { $scope: scope, registry: registryServiceMock.register});
		scope.register(params);
		expect(registryServiceMock.register).toHaveBeenCalledWith(params, jasmine.any(Function));
	});

	it('sets message', function () {
		controller('registryController', { $scope: scope, registry: registryServiceMock.register});
		scope.register({});
		expect(scope.message).not.toBeUndefined();
	});
});