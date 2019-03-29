import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles/NewPatientFormStyle";

class DetailsForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {classes} = this.props;

    return (
      <main className={classes.main}>
        <div>
          <TextField name="observations" label="Observaciones" type="text"
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
          <TextField name="alergies" label="Alergias" type="text"
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
          <TextField name="phone_number" label="Número Telefónico" type="number"
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
          <TextField name="address" label="Dirección" type="text"
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
          <TextField name="visit_reason" label="Motivo de Visita" type="text" multiline={true}
                     className={classes.textField} onChange={this.handleChange} margin="normal"/>
        </div>
        <div>
          <Button className={classes.button} onClick={this.back}>
            Atrás
          </Button>
          <Button className={classes.button} onClick={this.continue} variant="contained" color="primary">
            Siguiente
          </Button>
        </div>
      </main>
    );
  }
}

DetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsForm);