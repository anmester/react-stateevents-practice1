import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from './Containers/DogsList'

class App extends Component {
  
  state = {
    data: {}
  }
  
  componentDidMount() {
    fetch('http://localhost:4000/dogs')
    .then(res => res.json())
    .then(dogData => this.setState({data: dogData}))
  }
  
  
  render() {
    return (
      <div>
        {Object.keys(this.state.data).length > 0 ? 
          <DogsList dogs={this.state.data}/> :
          null}
      </div>
    ) 
  }
}

export default App;
