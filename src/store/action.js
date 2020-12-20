export const CLICK = 'CLICK' 
//api fetch
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
//loading 
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
//Show pokemon 
export const SHOW_POKEMON = 'SHOW_POKEMON'

//pokemons = list from the API
export const fetchPokemonSuccess = (pokemons) => ({
  type: FETCH_POKEMON_SUCCESS,
  pokemons
})

export const fetchPokemonPending = () => ({
  type: FETCH_POKEMON_PENDING
})

export const showPokemonAction = (pokemons) => {
  const filteredPokemons = pokemons.filter(pokemon => !pokemon.isCatch)
  const max = filteredPokemons.length
  const random = Math.floor(Math.random() * max.length + 1 )

  const onScreen = filteredPokemons[random]
  
  return dispatch => {
    dispatch({ 
      type: SHOW_POKEMON,
      onScreen
    })
  }
}