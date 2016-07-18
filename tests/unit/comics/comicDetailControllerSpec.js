describe('comic detail controller', function () {
  	var controller;
  	var routeParamsMock = {
      id: 1
    };
  	var scope = {};

  	beforeEach(function(){
  		module('comicStore');
  	});

  	beforeEach(function(){
  		inject(function(_$controller_, _comics_){
	    	controller = _$controller_;
        comicsServiceMock = _comics_;
	    });
  	});
    
    beforeEach(function(){
      comicsServiceMock.getOne = function(id, callBack){
        callBack({title:'title', detail:'detail', comments:['pre comment']});
      };
    });

  	it('exists', function(){
      controller('comicDetailController', {$scope:scope});
  	});

    it('calls comic service with id', function(){
      spyOn(comicsServiceMock, 'getOne');
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      expect(comicsServiceMock.getOne).toHaveBeenCalledWith(1, jasmine.any(Function));
    });
    
    it('sets title', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      expect(scope.title).toBe('title');
    });

    it('sets detail', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      expect(scope.detail).toBe('detail');
    });

    it('sets comments', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      expect(scope.comments).toEqual(['pre comment']);
    });

    it('adds comments', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      scope.comments = undefined;
      scope.text = 'a comment';
      scope.comment();
      expect(scope.comments).toEqual(['a comment']);
    });

    it('does not add empty comments', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      scope.comments = [];
      scope.text = '    ';
      scope.comment();
      expect(scope.comments).toEqual([]);
    });

    it('cleans text after comment', function(){
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      scope.text = 'a comment';
      scope.comment();
      expect(scope.text).toBe(undefined);
    });

    it('calls comment service', function(){
      spyOn(comicsServiceMock, 'comment');
      controller('comicDetailController', {$scope:scope, $routeParams:routeParamsMock, comics:comicsServiceMock});
      scope.text = 'a comment';
      scope.comment();
      expect(comicsServiceMock.comment).toHaveBeenCalledWith({id:1, comment:'a comment'});
    });
  		
});