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
    //
    Promise.all(requests)
  }
}