(function () {
	angular.module('comicStore').factory('comicstock', function(){
		return {
			data:[],
			add: function(id, title, detail){
				this.data.push({id:id, title:title, detail:detail});
			},
			get: function(id){
				for(index in this.data)
				{
					var comic = this.data[index];
					if (comic.id == id)
						return this.data[index];
				}
			},
			getAll: function(){
				return this.data;
			}
		};
	});
}())