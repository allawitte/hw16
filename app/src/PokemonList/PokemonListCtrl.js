'use strict';
pokemonApp.controller('PokemonListCtrl', function ($scope, PokemonsService, BerriesService, Entry, $q) {
    $scope.pokemons = [];
    var page = 10;
    var offset = 1;
    $scope.dataLoading = true;

    PokemonsService.getPokemons(page, offset).then(function (pokemonsData) {
        console.log('call');
        $scope.pokemons = $scope.pokemons.concat(pokemonsData.data.data);
    });



    Entry.query(function (res) {
        $scope.berries = res;
        console.log(res);
        $scope.dataLoading = false;
    });


    $scope.myOrderProperty = 'weight';

})
    .component('pokemonList', {
        bindings: {
            info: '=info'
        },
        templateUrl: 'PokemonListComponent.html'
    });
