import React from "react";

class DogCard extends React.Component {
  state = {clicked: false}
  
  bark = event => {
    this.setState({clicked: !this.state.clicked})
  }
  
  render() {
    return (
      <div>
        <h2 className="bark">{this.props.dog.name}</h2>
        <img alt={this.props.dog.name} src={this.props.dog.img} />
        <button onClick={this.bark}>Bark</button>
        {this.state.clicked ? <h2>Ruff</h2>:null}
      </div>
    );
  }
}

export default DogCard;
