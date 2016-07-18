describe('login service', function () {
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

  	afterEach(function(){
  		cookies.remove('username');
  	});

	it('sets cookie when login succeeds', function () {
		callWithResponse(200);
	  	expect(cookies.get('username')).toBe(username);
	});

	it('doesn_t set cookie when login fails', function () {
		callWithResponse(401);
	  	expect(cookies.get('username')).toBeUndefined();
	});

	it('requires username and password to login', function () {
		callWithResponse(200);
		httpBackend.expectPOST ('/login', {username:username, password:'123'});
	});

	function callWithResponse(status)
	{
		httpBackend.when('POST', '/login')
			.respond(status, '');
		login({username:username, password:'123'});
		httpBackend.flush();
	}

});