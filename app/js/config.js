(function(){
	'use strict';
	angular.module('comicStore')
	.run(['$httpBackend', 'users', 'comicstock', function($httpBackend, $users, $comicstock) {

		$users.add('admin', 'admin', 'admin', 'admin');

		$comicstock.add(1, 'superman', 'Superman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, high school students living in Cleveland, Ohio, in 1933. They sold Superman to Detective Comics, the future DC Comics, in 1938. Superman debuted in Action Comics #1 (cover-dated June 1938) and subsequently appeared in various radio serials, newspaper strips, television programs, films, and video games. With this success, Superman helped to create the superhero archetype and establish its primacy within the American comic book. The origin story of Superman relates that he was born Kal-El on the alien planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton\'s destruction.');
		$comicstock.add(2, 'batman', 'Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[5][6] and first appeared in Detective Comics #27 (May 1939). Originally named the Bat-Man, the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World\'s Greatest Detective. Batman\'s secret identity is Bruce Wayne, an American billionaire, playboy, philanthropist, and owner of Wayne Enterprises. After witnessing the murder of his parents Thomas Wayne and Martha Wayne as a child, he swore revenge on criminals, an oath tempered by a sense of justice. Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.[8] Batman operates in the fictional Gotham City, with assistance from various supporting characters, including his butler Alfred, police commissioner Jim Gordon, and vigilante allies such as Robin. Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman\'s rogues gallery, including his archenemy, the Joker.');
		$comicstock.add(3, 'green lantern', 'Green Lantern is the name of a number of superheroes appearing in American comic books published by DC Comics. They fight evil with the aid of rings that grant them a variety of extraordinary powers. The first Green Lantern character, Alan Scott, was created in 1940 during the initial popularity of superheroes. Alan Scott usually fought common criminals in New York City with the aid of his magic ring. The publication of this character ceased in 1949 during a general decline in the popularity of superhero comics, but the character saw a limited revival in later decades. In 1959, to capitalize on the booming popularity of science fiction, the Green Lantern character was reinvented as Hal Jordan, an officer for an interstellar law enforcement agency known as the Green Lantern Corps. Additional members of this agency, all of whom call themselves Green Lanterns, were introduced over time. Prominent Green Lanterns who also have had starring roles in the books include Guy Gardner, John Stewart, Kyle Rayner, Simon Baz and Jessica Cruz.');
		$comicstock.add(4, 'hulk', 'The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by Stan Lee and Jack Kirby, and first appeared in The Incredible Hulk #1 (May 1962). Throughout his comic book appearances, the Hulk is portrayed as a large green humanoid that possesses superhuman strength and invulnerability, attributes that grow more potent the angrier he becomes. Hulk is the alter ego of Bruce Banner, a socially withdrawn and emotionally reserved physicist who physically transforms into the Hulk under emotional stress and other specific circumstances at will or against it; these involuntary transformations lead to many complications in Banner\'s life. When transformed, the Hulk often acts as a dissociated personality separate from Banner. Over the decades of Hulk stories, the Hulk has been represented with several personalities based on Hulk and Banner\'s fractured psyche, ranging from mindless savage to brilliant warrior, and Banner has taken control of the Hulk\'s form on occasion. Banner first transforms into the Hulk after being caught in the blast of the gamma bomb he invented while saving Rick Jones, a youth who had wandered onto the testing range.');

		$httpBackend.whenPOST('/login').respond(function(method, url, data, headers){
			var data = angular.fromJson(data);
			var user = $users.get(data.username, data.password);
			if (user)
				return [200, user, {/*headers*/}];
			else
				return [401, {}, {}]
		});

		$httpBackend.whenPOST('/register').respond(function(method, url, data, headers){
			var data = angular.fromJson(data);
			$users.add(data.username, data.password, data.name, data.lastname);
			return [200, {}, {}]
		});

		$httpBackend.whenGET('/comics').respond(function(method, url, data, headers){
			return [200, $comicstock.getAll(), {}]
		});

		$httpBackend.whenGET(new RegExp('\\/comic\\?id=[0-9]+')).respond(function(method, url, data, headers){
			var queryMatch = /^[^#]*\?([^#]*)/.exec(url);
  			var query = queryMatch ? queryMatch[1] : "";
			var id = query.split('=')[1];
			return [200, $comicstock.get(id), {}]
		});

		$httpBackend.whenPOST('/comics').respond(function(method, url, data, headers){
			var id = $comicstock.getAll().length+1;
			var data = angular.fromJson(data);
			$comicstock.add(id, data.title, data.details);
			return [200, $comicstock.getAll(), {}]
		});

		$httpBackend.whenGET( '' ).passThrough(); 
	}])
	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider
			.when(
			'/', {
				templateUrl: "./templates/login.html",
				controller: "loginController"
			}).when(
			'/registry', {
				templateUrl: "./templates/registry.html",
				controller: "registryController"
			}).when(
			'/comics', {
				templateUrl: "./templates/comicstock.html",
				controller: "comicsController"
			}).when(
			'/comicdetail/:id', {
				templateUrl: "./templates/comicdetail.html",
				controller: "comicDetailController"
			}).when(
			'/logout', {
				template: "",
				controller: "logoutController"
			}).when(
			'/create', {
				templateUrl: "./templates/createcomic.html",
				controller: "comicCreateController"
			})
	}]);
}());