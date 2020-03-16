import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(sushi => {
      console.log("working")
    })

  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;