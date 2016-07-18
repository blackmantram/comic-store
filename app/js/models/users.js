(function () {
	angular.module('comicStore').factory('users', function(){
		return {
			data: [],
			getAll: function() {
				return this.data;
			},
			add:function(username, password){
				this.data.push({username:username, password:password});
			},
			verify:function(username, password){
				for(var index in this.data)
				{
					var user = this.data[index];
					if (user.username == username && user.password == password)
						return true;
				}
				return false;
			}
		};
	});
}())