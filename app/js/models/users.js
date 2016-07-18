(function () {
	angular.module('comicStore').factory('users', function(){
		return {
			data: [],
			getAll: function() {
				return this.data;
			},
			add:function(username, password, name, lastname){
				this.data.push({username:username, password:password, name:name, lastname:lastname});
			},
			get:function(username, password){
				for(var index in this.data)
				{
					var user = this.data[index];
					if (user.username == username && user.password == password)
						return user;
				}
			}
		};
	});
}())