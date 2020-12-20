export const CLICK = 'CLICK' 
//api fetch
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS'
//loading 
export const FETCH_POKEMON_PENDING = 'FETCH_POKEMON_PENDING'
//Show pokemon 
export const SHOW_POKEMON = 'SHOW_POKEMON'
//Catch pokemon 
export const CATCH_POKEMON = 'CATCH_POKEMON'

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
  const random = Math.floor(Math.random() * max )

  const onScreen = pokemons[random]

  return dispatch => {
    dispatch({ 
      type: SHOW_POKEMON,
      onScreen
    })
  }
}

export const catchPokemonAction = () => {
  const random = Math.floor(Math.random() * 255 )
  console.log("coucou")
  return dispatch => {
    dispatch({ 
      type: CATCH_POKEMON,
      random
    })
  }

}