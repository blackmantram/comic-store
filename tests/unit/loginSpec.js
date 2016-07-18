describe('login', function () {
	var login,
  		cookies,
  		httpBackend,
  		authRequestHandler;

  	var username = 'username';

  	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function($cookies, $httpBackend, _login_){
	    	login = _login_;
	    	cookies = $cookies;
	    	httpBackend = $httpBackend;
	    });
  	});

	it('sets cookie when login succeeds', function () {
		setupResponse(200, {});
	  	callLogin();
	  	expect(cookies.get('username')).toBe(username);
	});

	it('doesn_t set cookie when login fails', function () {
		setupResponse(401, '');
	  	cookies.remove(username);
		callLogin();
	  	expect(cookies.get('username')).toBeUndefined();
	});

	it('requires username and password to login', function () {
		cookies.remove(username);
		setupResponse(200, {});
		callLogin();
		httpBackend.expectPOST ('/login', {username:username, password:'123'});
	});

	function callLogin()
	{
		login({username:username, password:'123'});
		httpBackend.flush();
	}

	function setupResponse(status, data)
	{
		httpBackend.when('POST', '/login')
			.respond(status, data);
	}

});