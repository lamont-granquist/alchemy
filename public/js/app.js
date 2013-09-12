
/* main app */

var app = angular.module('myApp', []);

app.controller("HomeCtrl", function($scope) {

  $scope.submit = function() {
    var potion_factory = new PotionFactory;
    $scope.results = potion_factory.solveIngredients(_.flatten($scope.rows));
  }

  demo = {
    bleeding_crown: 10,
    blisterwort: 8,
    blue_dartwing: 3,
    crimson_nirnroot: 8,
    ectoplasm: 1,
    fire_salts: 5,
    frost_mirriam: 8,
    grass_pod: 2,
    hagraven_claw: 10,
    hawk_beak: 8,
    human_flesh: 4,
    lavender: 1,
    nightshade: 2,
    nirnroot: 7,
    red_mountain_flower: 9,
    river_betty: 2,
    rock_warbler_egg: 5,
    salt_pile: 2,
    silverside_perch: 4,
    skeever_tail: 8,
    small_antlers: 7,
    small_pearl: 5,
    spider_egg: 9,
    vampire_dust: 10,
    void_salts: 6,
    wheat: 6
  };

  $scope.loadDemoData = function() {
    _.each($scope.rows, function(row) {
      _.each(row, function(reagent) {
        if ( typeof demo[reagent['label']] !== 'undefined' ) {
          reagent['num'] = demo[reagent['label']];
        }
      });
    });
  };

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

//  $scope.loadDemoData();

});

