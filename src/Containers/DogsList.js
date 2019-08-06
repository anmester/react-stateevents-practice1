import React, { Component } from "react";
import DogCard from '../Components/DogCard'

class DogList extends Component {
  render() {
    let dogsArray = this.props.dogs.map(dog => <DogCard dog={dog}/>)
    return <div className="dogContainer">{dogsArray}</div>;
  }
}

export default DogList;
