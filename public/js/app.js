
/* main app */

var app = angular.module('myApp', []);

app.controller("HomeCtrl", function($scope) {

  $scope.submit = function() {
    $scope.alchemyLab.generateMixlist();
  }

  $scope.alchemyLab = new AlchemyLab();

  $scope.alchemyLab.setRows(4);

});

