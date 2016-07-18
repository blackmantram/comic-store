(function () {

  'use strict';
  angular.module('MainModule', ['ngRoute'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
        .when("/", {
          templateUrl: "./templates/welcome.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  angular.module('comicStore', ['ngCookies']);

}());