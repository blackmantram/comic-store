describe('comic create controller', function () {
	
	var controller;
	var scope = {};

	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function(_$controller_){
	    	controller = _$controller_;
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
  		expect(comicService.create).toHaveBeenCalledWith({title:'title', details:'details'});
  	});
});