import { fetchPokemonSuccess } from './action'

//number of pokemons we want
const numberOfPokemons = 151

//store all the addresses
const urls = []

for (let i = 1; i<= numberOfPokemons; i++) {
  urls.push(`https://pokeapi.co/api/v2/pokemon-species/${i}`)
}

const requests = urls.map(url => fetch(url))

export default async (dispatch) => {
  await Promise.all(requests.map(item => item.then(data => (data.json()))))
    .then(results => {
      return results.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        captureRate: pokemon.capture_rate,
        isCatch: false,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
      }))
    }).then(pokemons => {
      return dispatch(fetchPokemonSuccess(pokemons))
    });
};