import React from "react";
import { connect } from 'react-redux'
import PokemonItem from "./PokemonItem";

const PokeList = ({click, pokemons}) => {
  console.log(pokemons)
  return (
    <div className="list-container">
      <h2>Try : {click}</h2>
      <h2>Pokedex</h2>
      <ul>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ul>
    </div>
  );
};

const mapStateToProps = ({ click, pokemons }) => {
  return {
    click,
    pokemons
  }
}

export default connect(mapStateToProps)(PokeList);
