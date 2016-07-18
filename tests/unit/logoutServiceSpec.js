describe('logout service', function () {
	var logout,
  		cookies;

  	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function($cookies, _logout_){
  			logout = _logout_;
	    	cookies = $cookies;
	    });
  	});

  	it('exists', function () {
		logout();
	});

	it('unsets username cookie', function () {
		cookies.put('username', '');
		logout();
		expect(cookies.get('username')).toBeUndefined();
	});

	it('unsets name cookie', function () {
		cookies.put('name', '');
		logout();
		expect(cookies.get('name')).toBeUndefined();
	});

	it('unsets lastname cookie', function () {
		cookies.put('lastname', '');
		logout();
		expect(cookies.get('lastname')).toBeUndefined();
	});
});