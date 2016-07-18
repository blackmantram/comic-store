describe('comic model', function(){
	var comicstock;

	beforeEach(function () {
		module('comicStore');
	});

	beforeEach(function () {
		inject(function(_comicstock_){
	    	comicstock = _comicstock_;
	    });
	});

	it('can get comic', function(){
		comicstock.add(1, 'title', 'detail');
		var comic = comicstock.get(1);
		expect(comic).toEqual({id:1, title:'title', detail:'detail'});
	});

	it('can get all comics', function(){
		comicstock.add(1, 'title', 'detail');
		comicstock.add(2, 'title', 'detail');
		var comic = comicstock.getAll();
		expect(comic).toEqual([{id:1, title:'title', detail:'detail'},{id:2, title:'title', detail:'detail'}]);
	});

	it('can add comments to comics', function(){
		comicstock.add(1, 'title', 'detail');
		comicstock.comment(1, 'a comment');
		var comic = comicstock.get(1);
		expect(comic.comments).toEqual(['a comment']);
	});
});