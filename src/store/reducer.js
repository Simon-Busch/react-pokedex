import initialState from './initialState'
import { CLICK } from './action'

//set up by default the state
const reducer = (state = initialState, action) => {
  switch (action.type){
    case CLICK:
      return {
        ...state,
        click: state.click + 1
      }
    default:
      return state;
  }
  
}

export default reducer;