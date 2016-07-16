(function () {

  'use strict';
  angular.module('MainModule')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.welcome = "Welcome";
    }
  ]);
}());