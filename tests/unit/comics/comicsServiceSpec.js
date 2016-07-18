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

  	it('creates comic', function(){
  		var response;
  		httpBackend.when('POST', '/comics').respond({});
  		comics.create({title:'title', details:'details'});
  		httpBackend.expectPOST ('/comics', {title:'title', details:'details'});
  		httpBackend.flush();
  	});

  	it('creates comic response is not undefined', function(){
  		var response;
  		httpBackend.when('POST', '/comics').respond({});
  		comics.create({title:'title', details:'details'}, function(result){
  			response = result;
  		});
  		httpBackend.flush();
  		expect(response).not.toBeUndefined();
  	});

  	it('result missing_title if no title', function(){
  		var response;
  		comics.create({details:'details'}, function(result){
  			response = result;
  		});
  		expect(response).toBe('missing_title');
  	});

  	it('result missing_detail if no detail', function(){
  		var response;
  		comics.create({title:'title'}, function(result){
  			response = result;
  		});
  		expect(response).toBe('missing_detail');
  	});

  	it('gets one comic', function(){
      var comic;
  		httpBackend.when('GET', '/comic?id=1').respond({});
  		comics.getOne(1, function(_comic){
        comic = _comic;
      });
  		httpBackend.expectGET ('/comic?id=1');
  		httpBackend.flush();
      expect(comic).toEqual({});
  	});
});