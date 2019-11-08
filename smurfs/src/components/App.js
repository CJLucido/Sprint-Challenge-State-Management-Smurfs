import React, { Component } from "react";
import "./App.css";

import {fetchSmurfs} from '../actions'

import {connect} from 'react-redux'
import SmurfList from "./organisms/SmurfList";

class App extends Component {
 

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <button type="button" onClick={()=> this.props.fetchSmurfs()}>Get Smurfs!</button>
        {this.props.error && <p>{this.props.error}</p>}
        {this.props.isFetching  && <p>This is taking a really smurf time!</p> }

        <SmurfList/>

      </div>
    );
  }
}

const mapDispatchToProps ={
  fetchSmurfs
}

export default connect(state=> state, mapDispatchToProps)(App);
