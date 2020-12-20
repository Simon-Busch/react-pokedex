import React, { useEffect } from "react";
//useEffect is a hook that allows us to make an action on loading of the app
import "./styles.css";
import { connect } from 'react-redux';
import { CLICK, showPokemonAction } from './store/action';

import fetchPokemons from './store/fetchPokemons'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from './components/Loader'

// passed from "mapStateToProps"
const App = ({ click, fetchPokemons, pending, showPokemon, pokemons }) => {

  //useEffect take a function as parameter
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])
  //array means, if fetchPokemons is modified, relaunch fetchPokemons

  if (pending) {
    return <Loader />
  }

  return (
    <div className="App">
      <button onClick={() => click()}> 
      click
      </button>
      <GameBoy 
        showPokemon={() => showPokemon(pokemons)}
      />
      <PokeList />
    </div>
  );
};

// what we want to grap from the state
const mapStateToProps = ({ click, pokemons, pending }) => {
  return {
    click,
    pokemons,
    pending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //in this case, this is the function fetchPokemons that will dispaly the data.
    fetchPokemons: () => fetchPokemons(dispatch),
    click: () => dispatch({type: CLICK}),
    //pass the props to the action
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons))
  }
}

// we get our state object, mapStateToProps that we will connect to App
export default connect(mapStateToProps, mapDispatchToProps)(App);
