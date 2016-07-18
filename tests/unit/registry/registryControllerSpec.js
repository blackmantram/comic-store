describe('registry controller', function(){
	var controller;
	var registryServiceMock = {
		register: function(params, callback){
			callback('complete');
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
		var params = {
			username: 'username',
			password: 'password',
			name: 'name',
			lastname: 'lastname'
		}
		spyOn(registryServiceMock, 'register');
		callRegister();
		expect(registryServiceMock.register).toHaveBeenCalledWith(params, jasmine.any(Function));
	});

	it('sets message', function () {
		callRegister();
		expect(scope.message).not.toBeUndefined();
	});

	it('clears data after registry', function () {
		callRegister();
		expect(scope.username).toBeUndefined();
		expect(scope.password).toBeUndefined();
		expect(scope.name).toBeUndefined();
		expect(scope.lastname).toBeUndefined();
	});
	it('does not clear data when registry fails', function () {
		registryServiceMock.register = function(params, callback){
			callback('some_fail_message');
		}
		callRegister();
		expect(scope.username).not.toBeUndefined();
		expect(scope.password).not.toBeUndefined();
		expect(scope.name).not.toBeUndefined();
		expect(scope.lastname).not.toBeUndefined();
	});

	function callRegister() {
		scope.username = 'username';
		scope.password = 'password';
		scope.name = 'name';
		scope.lastname = 'lastname';
		controller('registryController', { $scope: scope, registry: registryServiceMock.register});
		scope.register({});
	}
});