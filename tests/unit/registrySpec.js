describe('registry', function(){

	var registry,
		httpBackend,
		params,
		result;

	beforeEach(function(){
		params = {
			name:'name',
			lastname:'lastname',
			username:'username',
			password:'123'
		}
	});

	beforeEach(function(){
		module('comicStore');
	});

	beforeEach(function(){
		inject(function($httpBackend, _registry_){
		    registry = _registry_;
		    httpBackend = $httpBackend;
		});
	});

	it('result is missing_name when no name', function(){
		params.name = undefined;
		callRegistry();
		expect(result).toBe('missing_name');
	});

	it('result is missing_name when empty name', function(){
		params.name = '';
		callRegistry();
		expect(result).toBe('missing_name');
	});

	it('result is missing_lastname when no lastname', function(){
		params.lastname = undefined;
		callRegistry();
		expect(result).toBe('missing_lastname');
	});

	it('result is missing_lastname when empty lastname', function(){
		params.lastname = '';
		callRegistry();
		expect(result).toBe('missing_lastname');
	});

	it('result is missing_username when no username', function(){
		params.username = undefined;
		callRegistry();
		expect(result).toBe('missing_username');
	});

	it('result is missing_username when empty username', function(){
		params.username = ' ';
		callRegistry();
		expect(result).toBe('missing_username');
	});

	it('result is missing_password when no password', function(){
		params.password = undefined;
		callRegistry();
		expect(result).toBe('missing_password');
	});

	it('result is missing_password when empty password', function(){
		params.password = '   ';
		callRegistry();
		expect(result).toBe('missing_password');
	});

	it('result is complete when succeeds', function(){
		httpBackend.when('POST', '/register')
			.respond(200, '');
		callRegistry();
		httpBackend.flush();
		expect(result).toBe('complete');
	});

	function callRegistry() {
		registry(params, function(_result){
			result = _result;
		});
	}
});