import React, { Component } from "react";
import "./App.css";

import {fetchSmurfs} from '../actions'

import {connect} from 'react-redux'

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <button type="button" onClick={()=> this.props.fetchSmurfs()}>Get Smurfs!</button>
        {this.props.error && <p>{this.props.error}</p>}
        {this.props.isFetching  && <p>This is taking a really smurf time!</p> }
      </div>
    );
  }
}

const mapDispatchToProps ={
  fetchSmurfs
}

export default connect(state=> state, mapDispatchToProps)(App);
