import React, {Component} from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {BrowserRouter} from "react-router-dom"
import fire from "../../config/FirebaseConfig";
import Home from "./Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1595BD', contrastText: '#FAFAFA' },
    secondary: { main: '#3F51B5' }
  },
  typography: { useNextVariants: true },
});

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
        <MuiThemeProvider theme={theme}>
          <Home/>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default (App);
