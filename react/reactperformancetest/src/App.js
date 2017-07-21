import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import colorData from './data/colorData.json';
class App extends Component {
  constructor(){
       super();
       this.state = {
           colorData: []
       };
   };

   componentDidMount() {
   fetch("/colorData.json",{
  // mode: 'no-cors',
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
},
).then( (response) => {
             console.log("((((()))))", response)
               return response.json() })
                   .then( (json) => {
                       this.setState({colorData: json.data});
                   }).catch(error => { console.log('request failed', error); });;
   };
  render() {
    return (
      <div className="App">
        {this.state.colorData.map(function(data) {
          return <div className="testDIV" style={{backgroundColor:data.color, color:'white', height:'auto'}}>
            <h2>{data.text}</h2><hr></hr>
          </div>
        })}
      </div>
    );
  }
}

export default App;
