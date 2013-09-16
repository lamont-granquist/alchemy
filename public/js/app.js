
/* main app */

var app = angular.module('myApp', []);

app.controller("HomeCtrl", function($scope, $q, $timeout) {

  var updateMixlist = function() {
    console.log('BAR');
    $scope.alchemyLab.generateMixlist(function(mixlist) {
      console.log('FOO: ' + mixlist);
      $scope.$apply(function() { $scope.mixlist = mixlist });
    });
  }

  $scope.submit = function() { updateMixlist(); };

  $scope.alchemyLab = new AlchemyLab();

  $scope.alchemyLab.setRows(4);

  var watchFun = function(o, n) { if (o !== n) { updateMixlist(); } }

  for(var i = 0; i < $scope.alchemyLab.ingredientList.length; i++) {
    $scope.$watch("alchemyLab.ingredientList["+i+"].num", watchFun);
  }
});

