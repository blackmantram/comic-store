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

	it('gets existent user', function(){
		users.add('username', '123', 'name', 'lastname');
		expect(users.get('username', '123')).toEqual({username:'username', password:'123', name:'name', lastname:'lastname'});
	});

	it('returns undefined when user does not exists', function(){
		expect(users.get('username', '123')).toBeUndefined();
	});
});