import React from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from "./Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1595BD', contrastText: '#FAFAFA' },
    secondary: { main: '#3F51B5' }
  },
});

const App = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Home/>
    </MuiThemeProvider>
  )
};

export default (App);
