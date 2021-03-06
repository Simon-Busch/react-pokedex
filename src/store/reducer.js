import initialState from './initialState'
import { CLICK, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_PENDING, SHOW_POKEMON, CATCH_POKEMON} from './action'

//set up by default the state
const reducer = (state = initialState, action) => {
  switch (action.type){
    case CLICK:
      return {
        // keep the state
        ...state,
        click: state.click + 1
      }
    case FETCH_POKEMON_SUCCESS: 
      return {
        ...state,
        // update pokemons [] in the inital states
        pokemons: action.pokemons,
        pending: false
      }
    case FETCH_POKEMON_PENDING:
      return {
        ...state,
        pending: true
      }
    case SHOW_POKEMON:
      return {
        ...state,
        onScreen: action.onScreen
        // refers to showPokemonAction //action.js
        //const onScreen = pokemons[random]
      }
    case CATCH_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map(pokemon => {
          if (pokemon.id === state.onScreen.id) {
            const isCaught = pokemon.captureRate + action.random
            if (isCaught>=255) {
              return {...pokemon, isCatch: true}
            }
            return pokemon
          }
          return pokemon
        })
      }
    default:
      return state;
  }
  
}

export default reducer;