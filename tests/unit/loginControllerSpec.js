describe('login controller', function(){
	var controller,
		cookiesMock;

	var loginServiceMock = {
		login: function(params){
			if (params.username == 'username')
				cookiesMock.put('username', 'username');
		}
	};
	var scope = {};
	
	beforeEach(function(){
  		module('comicStore');
  	});
		
	beforeEach(function(){
		inject(function($cookies, _$controller_){
		    controller = _$controller_;
		    cookiesMock = $cookies;
		});
  	});

	it('calls login service with params', function () {
		var params = {
			username: 'username',
			password: '123'
		}
		spyOn(loginServiceMock, 'login');
		callLogin(params);
		expect(loginServiceMock.login).toHaveBeenCalledWith(params);
	});

	it('sets mesage when login failed', function () {
		cookiesMock.remove('username');
		callLogin({});
		expect(scope.message).toBe('login_failed');
	});

	it('doesn_t set message when login succeed', function () {
		callLogin({username:'username'});
		expect(scope.message).toBe('');
	});

	function callLogin(params)
	{
		var loginController = controller('loginController', { $scope: scope, login: loginServiceMock.login, $cookies: cookiesMock});
	  	scope.login(params);
	}
});