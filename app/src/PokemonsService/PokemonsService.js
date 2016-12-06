angular
    .module('PokemonApp')
    .factory('PokemonsService', function ($http) {
        //$http.defaults.useXDomain = true;
        return {
            getPokemons: function(page, offset) {
                var params = 'pageSize=' + page + '&offset=' + (offset - 1);
                console.log('params', params);
                return $http({
                    method: 'GET',
                    //url: 'https://api.backendless.com/v1/data/pokemons?' + params
                    url: 'https://api.backendless.com/v1/data/pokemons'
                });
            },

            getPokemon: function (pokemonId) {
                return $http({
                    method: 'GET',
                    /*
                    headers: {
                        "application-id": "F8C627E9-5428-BD94-FFFD-F4469E64C100",
                        "secret-key": "4089B3FB-BC5B-1967-FF9F-1D8475134200"
                    },*/
                    url: 'http://api.backendless.com/v1/data/pokemons/' + pokemonId
                });
            },

            editPokemon: function (pokemonId, pokemon) {
                return $http({
                    method: 'PUT',
                    data: pokemon,
                    /*
                     headers: {
                     "application-id": "F8C627E9-5428-BD94-FFFD-F4469E64C100",
                     "secret-key": "4089B3FB-BC5B-1967-FF9F-1D8475134200"
                     },*/
                    url: 'http://api.backendless.com/v1/data/pokemons/' + pokemonId
                });
            }

        }


    });
