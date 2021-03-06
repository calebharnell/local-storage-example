import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    clicked: 0
  }

  incrementClicked = () => {
    const newTotalClicks = this.state.clicked + 1
    this.setState({
      clicked: newTotalClicks
    })
    localStorage.setItem("clicked", newTotalClicks)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.incrementClicked}>You have clicked {this.state.clicked} times</button>
      </div>
    );
  }

  componentDidMount = () => {
    this.setState({
      clicked: parseInt(localStorage.getItem("clicked"), 10)
    })
  }

}

export default App;
