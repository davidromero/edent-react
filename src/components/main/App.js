import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom"
import fire from "../../config/Firebase";
import Home from "./Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
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
        <div>
          <Home/>
        </div>
      </BrowserRouter>
    );
  }
}


export default (App);
