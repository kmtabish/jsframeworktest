import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import colorData from './data/colorData.json';
class App extends Component {
  render() {
    return (
      <div className="App">
        {colorData.map(function(data) {
          return <div style={{backgroundColor:data.color, color:'white', height:'auto'}}>
            <h2>{data.text}</h2><hr></hr>
          </div>

        })}
      </div>
    );
  }
}

export default App;
