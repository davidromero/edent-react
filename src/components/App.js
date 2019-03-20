import React, {Component} from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter} from 'react-router-dom'
// import Login from './Login'
import Home from './Home'
import fire from '../config/Firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
      else {
        this.setState({user: null});
      }
    });
  }


  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CssBaseline/>
        <div className="App">
          <Home/>
          {/*<Login/>*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
