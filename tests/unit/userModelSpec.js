describe('user model', function(){
	var users;

	beforeEach(function () {
		module('comicStore');
	});

	beforeEach(function () {
		inject(function(_users_){
	    	users = _users_;
	    });
	});

	it('returns array of users', function(){
		expect(users.getAll()).toEqual([]);
	});

	it('adds an user', function(){
		users.add('', '');
		expect(users.getAll().length).toEqual(1);
	});

	it('verifies user exists', function(){
		users.add('username', '123');
		expect(users.verify('username', '123')).toBe(true);
	});

	it('verifies user does not exist', function(){
		expect(users.verify('username', '123')).toBe(false);
	});
});