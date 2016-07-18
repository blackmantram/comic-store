describe('login service', function () {
	var login,
  		cookies,
  		httpBackend,
  		authRequestHandler;

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
  		cookies.remove('name');
  		cookies.remove('lastname');
  	});

	it('sets cookie when login succeeds', function () {
		callWithResponse(200);
		expect(cookies.get('username')).toBe('username');
	  	expect(cookies.get('name')).toBe('name');
	  	expect(cookies.get('lastname')).toBe('lastname');
	});

	it('doesn_t set cookie when login fails', function () {
		callWithResponse(401);
	  	expect(cookies.get('username')).toBeUndefined();
	});

	it('requires username and password to login', function () {
		httpBackend.expectPOST ('/login', {username:'username', password:'123'});
		callWithResponse(200);
	});

	function callWithResponse(status)
	{
		httpBackend.when('POST', '/login')
			.respond(status, {username:'username', name:'name', lastname:'lastname'});
		login({username:'username', password:'123'});
		httpBackend.flush();
	}

});