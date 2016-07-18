describe('registry', function(){

	var registry,
		httpBackend;

	beforeEach(function(){
		module('comicStore');
	});

	beforeEach(function(){
		inject(function($httpBackend, _registry_){
		    registry = _registry_;
		    httpBackend = $httpBackend;
		});
	});

	it('calls http service', function(){
		httpBackend.when('POST', '/register')
			.respond(200, '');
		registry({username:'username', password: '123'}, function(){});
		httpBackend.flush();
		httpBackend.expectPOST ('/register', {username:'username', password:'123'});
	});

	it('result is missing_username when no username', function(){
		var result = undefined;
		registry({password:''}, function(_result){
			result = _result;
		});
		expect(result).toBe('missing_username');
	});

	it('result is missing_username when username is empty', function(){
		var result = '';
		registry({username:''}, function(_result){
			result = _result;
		});
		expect(result).toBe('missing_username');
	});

	it('result is missing_username when username is only spaces', function(){
		var result = '';
		registry({username:'   '}, function(_result){
			result = _result;
		});
		expect(result).toBe('missing_username');
	});

	it('result is missing_password when no password', function(){
		var result = undefined;
		registry({username:'username'}, function(_result){
			result = _result;
		});
		expect(result).toBe('missing_password');
	});

	it('result is undefined when succeeds', function(){
		var result = 'not undefined';
		httpBackend.when('POST', '/register')
			.respond(200, '');
		registry({username:'username', password: '123'}, function(_result){
			result = _result;
		});
		httpBackend.flush();
		expect(result).toBeUndefined();
	});
});