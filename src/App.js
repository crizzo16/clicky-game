import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game.js";
import "./css/materialize.css";

class App extends Component {
  render() {
    return (
      <div className="App grey darken-3">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <nav className="teal lighten-2">
          <div className="nav-wrapper">
            <a href=" " className="brand-logo center truncate">
              Critical Memory
            </a>
          </div>
        </nav>
        <Game />
      </div>
    );
  }
}

export default App;
