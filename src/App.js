import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
// import Message from './components/Message'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
             <code>Welcome to reactjs </code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </header> */}
        <Greet name="Swarna" heroName="Batman">
         <p>This the Children props</p> </Greet>
        < Greet name="Mini" heroName="Superman">
        <button>Action</button></ Greet>
        < Greet name="Aayushi" heroName="Spieder-man" />
        
        <Welcome name = "Swarna" heroName="Batman" />
        <Welcome name="Mini" heroName="Superman"/>
        <Welcome name = "Aayushi" heroName="Spieder-man"/>
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
