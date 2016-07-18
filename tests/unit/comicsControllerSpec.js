describe('comics controller', function () {
	var controller;
	var comicsServiceMock = {
		getAll: function(callBack){
			callBack([]);
		}
	};
	var scope = {};

  	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function(_$controller_){
	    	controller = _$controller_;
	    });
  	});

  	it('gets all comics from service', function(){
  		spyOn(comicsServiceMock, 'getAll');
  		getAllComics();
  		expect(comicsServiceMock.getAll).toHaveBeenCalled();
  	});

  	it('gets all', function(){
  		getAllComics();
  		expect(scope.comicsData).toEqual([]);
  	});

  	function getAllComics()
  	{
  		controller('comicsController', {$scope:scope, comics:comicsServiceMock});
  		scope.getAllComics();
  	}
  		
});