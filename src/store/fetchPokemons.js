import { fetchPokemonSuccess } from './action'

//number of pokemons we want
const numberOfPokemons = 10

//store all the addresses
const urls = []

for (let i = 1; i<= numberOfPokemons; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map(url => fetch(url))

export default () => {
  return dispatch => {

    // will check if ALL promises are consumed in the requests []
    Promise.all(requests)
      //once all consumed, return an array of responses
      //check again if all consumed
      //and get back a JSON
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(pokemons => pokemons.map(pokemon => ({
        // from the api
        id: pokemon.id,
        name: pokemon.name,
        capureRate: pokemon.capture_rate,
        //not from the api
        isCatch: false,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
      })))
      .then(pokemons => dispatch(fetchPokemonSuccess(pokemons)))
      
  }
}