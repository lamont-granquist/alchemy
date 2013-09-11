
/* main app */

var app = angular.module('myApp', []);

app.controller("HomeCtrl", function($scope) {

  $scope.submit = function() {
    var potion_factory = new PotionFactory;
    $scope.results = potion_factory.solveIngredients(_.flatten($scope.rows));
  }

  $scope.initialize = function() {
    var potion_factory = new PotionFactory;
    var ingredients = potion_factory.ingredientsList();

    ingredients = _.map(ingredients, function(ingredient) { ingredient['num'] = 0; return ingredient });

    var ret = new Array();

    ret[0] = new Array();
    ret[1] = new Array();
    ret[2] = new Array();
    ret[3] = new Array();

    var row_length = Math.ceil(ingredients.length/4);

    for(i = 0; i < row_length; i++) {
      ret[0].push(ingredients[i]);
    }

    for(; i < row_length * 2; i++) {
      ret[1].push(ingredients[i]);
    }

    for(; i < row_length * 3; i++) {
      ret[2].push(ingredients[i]);
    }

    for(; i < ingredients.length; i++) {
      ret[3].push(ingredients[i]);
    }

    console.log(ret);
    return ret;
  }

  $scope.rows = $scope.initialize(); // FIXME: call a service/model
});

