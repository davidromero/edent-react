import React, {Component} from 'react';
import '../styles/App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignIn from './SignIn.js'
import Home from './Home.js'
import fire from '../config/Firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user:null })

      }
    });
  }


  render() {
    return (
      <div className="App">
        <CssBaseline/>
        {this.state.user ? (<Home />) : (<SignIn />)}
      </div>
    );
  }
}

export default App;
