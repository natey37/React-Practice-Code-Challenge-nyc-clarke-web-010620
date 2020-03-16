import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    startingSushi: [],
    startingIndex: 0,
    emptyPlates: [], 
    startingCash: 100
  }

  componentDidMount(){
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(sushi => {
      console.log(sushi)
      // let newSushi = sushi.slice(0, 4)
      this.setState({
        sushi: sushi,
        startingSushi: sushi.slice(0, 4)
      })
    })
  }

  moreSushi = () => {
    console.log("working")
    return this.setState({
      startingSushi: this.state.sushi.slice(this.state.startingIndex, this.state.startingIndex + 4), 
      startingIndex: this.state.startingIndex + 4 
    })
  }

  removeSushi = (id) => {
    if(this.state.startingCash > 0 ){
      let thisSushi = this.state.startingSushi.filter(sushi => sushi.id === id )[0]
      console.log(thisSushi)
      console.log("working")
      let newSushis = this.state.startingSushi.filter(sushi => sushi.id !== id )
      this.setState({
        startingSushi: newSushis,
        emptyPlates: [...this.state.emptyPlates, true],
        startingCash: this.state.startingCash - thisSushi.price
      })
    } else {
      null 
    }
  }

  addMoney = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(this.state.startingCash)
    let moneyToAdd = parseInt(event.target[0].value)
    console.log(moneyToAdd)
    this.setState({
      startingCash: this.state.startingCash + moneyToAdd
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.startingSushi} moreSushi={this.moreSushi} removeSushi={this.removeSushi}/>
        <Table emptyPlates={this.state.emptyPlates} startingCash={this.state.startingCash}/>
        <MoneyForm addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;