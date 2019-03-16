import React, { Component } from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './SignIn.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <header className="App-header">
          <p>
            Sistema eDent
          </p>
        </header>
        <SignIn/>
      </div>
    );
  }
}

export default App;
