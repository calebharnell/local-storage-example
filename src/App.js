import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicked: 0
  }

  incrementClicked = () => {
    console.log("Clicky clicky")
    this.setState(prevState => ({
      clicked: ++prevState.clicked
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.incrementClicked}>You have clicked {this.state.clicked} times</button>
      </div>
    );
  }
}

export default App;
