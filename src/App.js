import React from "react";
import "./styles.css";
import { connect } from 'react-redux'
import { CLICK } from './store/action'

import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";

const App = ({ click }) => {
  return (
    <div className="App">
      <button onClick={() => click()}> 
      click
      </button>
      <GameBoy />
      <PokeList />
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch({type: CLICK})
  }
}

// we get our state object, mapStateToProps that we will connect to App
export default connect(null, mapDispatchToProps)(App);
