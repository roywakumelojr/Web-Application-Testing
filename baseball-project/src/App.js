import React from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

export const strike = currentScore => {
  return currentScore + 1;
};

export const ball = currentScore => {
  return currentScore + 1;
};

export const hit = currentScore => {
  return currentScore * 0;
};

class App extends React.Component {
  state = { balls: 0, strikes: 0 }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='header'>Baseball Scoreboard</h1>
          <div>
            <Display getBalls={this.getBalls} getStrikes={this.getStrikes} />
            <Dashboard setStrike={this.setStrike} setBall={this.setBall} setHit={this.setHit} setFoul={this.setFoul} />
          </div>
        </header>
      </div>
    );
  }

  getBalls = () => {
    return this.state.balls;
  }

  getStrikes = () => {
    return this.state.strikes;
  }

  setStrike = () => {
    if(this.state.strikes === 2) 
      this.setState({...this.state, strikes:0})
    else
      this.setState({...this.state, strikes:this.state.strikes+1})
  }
  setBall = () => {
    if(this.state.balls === 3)
      this.setState({...this.state, balls:0})
    else
      this.setState({...this.state, balls:this.state.balls+1})
  }
  setHit = () => {
    this.setState({balls:0, strikes:0})
  }
  setFoul =  () => {
    if(this.state.strikes < 2) {
      this.setState({...this.state, strikes:this.state.strikes+1})
    }
  }
}

export default App;
