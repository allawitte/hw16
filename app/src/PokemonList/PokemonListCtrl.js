'use strict';
pokemonApp.controller('PokemonListCtrl', function ($scope, PokemonsService, BerriesService, Entry, $q) {
    $scope.pokemons = [];
    var page = 10;
    var offset = 1;
    $scope.dataLoading = true;
    console.log('Ctrl');

    PokemonsService.getPokemons(page, offset).then(function (pokemonsData) {
        $scope.pokemons = $scope.pokemons.concat(pokemonsData.data.data);
    });



    Entry.query(function (res) {
        $scope.berries = res;
        $scope.dataLoading = false;
    });


    $scope.myOrderProperty = 'weight';

})
    .component('myList', {
        bindings: {
            info: '=info'
        },
        templateUrl: 'src/PokemonList/PokemonListComponent.html'
    });
