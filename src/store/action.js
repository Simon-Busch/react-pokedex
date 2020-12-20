export const CLICK = 'CLICK' 

//api fetch
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
//pokemons = list from the API
export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons

})