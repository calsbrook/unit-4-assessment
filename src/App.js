import React, { Component } from 'react';
import CircleSelector from './CircleSelector/CircleSelector'
import Circles from './Circles/Circles'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      selectedCircle: 0
    }
  }

  changeCircle = (circleIdx) => {
    this.setState({selectedCircle: circleIdx})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            changeCircle={this.changeCircle}
            selected={this.state.selectedCircle}
          />
          <Circles 
            selected={this.state.selectedCircle}
          />
        </main>
      </div>
    );
  }
}

export default App;