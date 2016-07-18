describe('comic create controller', function () {
    var controller,
        location;
    var scope = {};
    
    beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function(_$controller_, _$location_){
	    	controller = _$controller_;
        location =  _$location_;
	    });
  	});

  	it('can create', function(){
  		controller('comicCreateController', {$scope:scope});
  		scope.create();
  	});

  	it('calls create service', function(){
  		var comicService = {
  			create:function(){}
  		};
  		spyOn(comicService, 'create');
  		controller('comicCreateController', {$scope:scope, comics:comicService});
  		scope.title = 'title';
  		scope.details = 'details';
  		scope.create();
  		expect(comicService.create).toHaveBeenCalledWith({title:'title', details:'details'}, jasmine.any(Function));
  	});

    it('redirects to comicstock after create', function(){
      var comicService = {
        create:function(data, callback){
          callback();
        }
      };
      spyOn(location, 'path');
      controller('comicCreateController', {$scope:scope, comics:comicService});
      scope.title = 'title';
      scope.details = 'details';
      scope.create();
      expect(location.path).toHaveBeenCalledWith('/comics');
    });
});