import React from "react";
import { connect } from 'react-redux'
import PokemonItem from "./PokemonItem";

const PokeList = ({click}) => {
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

const mapStateToProps = ({ click }) => {
  return {
    click
  }
}

export default connect(mapStateToProps)(PokeList);
