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

	it('returns all users', function(){
		users.add('u1', 'p1', 'n1', 'f1');
		users.add('u1', 'p1', 'n1', 'f1');
		expect(users.getAll()).toEqual([
			{username:'u1', password:'p1', name:'n1', lastname:'f1'},
			{username:'u1', password:'p1', name:'n1', lastname:'f1'}
		]);
	});

	it('gets existent user', function(){
		users.add('username', '123', 'name', 'lastname');
		expect(users.get('username', '123')).toEqual({username:'username', password:'123', name:'name', lastname:'lastname'});
	});
});