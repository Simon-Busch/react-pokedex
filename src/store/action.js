export const CLICK = 'CLICK' 
//api fetch
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
//loading 
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'

//pokemons = list from the API
export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons
})

export const fetchPokemonPending = () => ({
  type: FETCH_POKEMON_PENDING
})