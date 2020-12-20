import initialState from './initialState'
import { CLICK, FETCH_POKEMON_SUCCESS } from './action'

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
        pokemons: action.pokemons
      }
    default:
      return state;
  }
  
}

export default reducer;