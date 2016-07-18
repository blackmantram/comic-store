describe('login controller', function(){
	var controller,
		cookiesMock,
		location;

	var loginServiceMock = {
		login: function(params, callBack){
			if (params.username == 'username')
				cookiesMock.put('username', 'username');
			callBack();
		}
	};
	var scope = {};
	
	beforeEach(function(){
  		module('comicStore');
  	});
		
	beforeEach(function(){
		inject(function($cookies, _$controller_, _$location_){
		    controller = _$controller_;
		    cookiesMock = $cookies;
		    location = _$location_;
		});
  	});

  	afterEach(function(){
  		cookiesMock.remove('username');
  	});

	it('calls login service with params', function () {
		var params = {
			username: 'username',
			password: '123'
		}
		spyOn(loginServiceMock, 'login');
		callLogin(params);
		expect(loginServiceMock.login).toHaveBeenCalledWith(params, jasmine.any(Function));
	});

	it('sets mesage when login failed', function () {
		callLogin({username:'badusername'}, function(){
			expect(scope.message).toBe('login_failed');
		});
	});

	it('sets mesage when no data sent', function () {
		callLogin({});
		expect(scope.message).toBe('no_data');
	});

	it('doesn_t set message when login succeed', function () {
		callLogin({username:'username'});
		expect(scope.message).toBe('');
	});

	it('redirects when login successful', function () {
		spyOn(location, 'path');
		callLogin({username:'username'});
		expect(location.path).toHaveBeenCalledWith('/comics');
	});

	it('does not redirects when login failed', function () {
		spyOn(location, 'path');
		callLogin({username:'badusername'});
		expect(location.path).not.toHaveBeenCalled();
	});

	it('automatically redirects when cookie enabled', function () {
		cookiesMock.put('username', 'username');
		spyOn(location, 'path');
		var loginController = controller('loginController', { $scope: scope, login: loginServiceMock.login, $cookies: cookiesMock});
		expect(location.path).toHaveBeenCalledWith('/comics');
	});

	function callLogin(params)
	{
		var loginController = controller('loginController', { $scope: scope, login: loginServiceMock.login, $cookies: cookiesMock});
	  	scope.username = params.username;
	  	scope.password = params.password;
	  	scope.login();
	}
});