'use strict';

pokemonApp.component('pokemonDetails',{
    templateUrl:'src/PokemonDetail/PokemonDetail.html',
    controller: function($scope, $routeParams, PokemonsService) {
        var vm = this;
        PokemonsService.getPokemon($routeParams['pokemonId']).then(function(pokemonData) {
            vm.pokemon = pokemonData.data;
            console.log(vm.pokemon);
        });
    }
});
