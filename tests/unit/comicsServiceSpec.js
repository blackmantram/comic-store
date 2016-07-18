describe('comics service', function () {
	var comics,
  		httpBackend;

  	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function($httpBackend, _comics_){
	    	comics = _comics_;
	    	httpBackend = $httpBackend;
	    });
  	});

  	it('gets all comics', function(){
  		httpBackend.when('GET', '/comics').respond([]);
  		var comicsList = comics.getAll(function(data){
  			expect(data).toEqual([]);
  		});
  		httpBackend.expectGET ('/comics');
  		httpBackend.flush();
  	});
});