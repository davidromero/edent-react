import React, {Component} from "react";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/LoginStyle";
import withStyles from "@material-ui/core/es/styles/withStyles";
import fire from "../config/Firebase";
import logo from "../assets/img/edent-logo.png";

class Login extends Component {

  state = {
    email: "",
    password: ""
  };

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function (error) {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {classes} = this.props;

    return (
      <main className={classes.main}>
        <header className="App-header">
          <p>
            Sistema eDent
          </p>
        </header>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar} src={logo}/>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Correo electrónico</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Contraseña</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password"
                     onChange={this.handleChange}/>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Iniciar Sesión
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);