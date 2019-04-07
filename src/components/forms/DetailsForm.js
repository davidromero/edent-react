import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles/FormsStyle";

class DetailsForm extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {classes, handleChange} = this.props;

    return (
      <div>
        <div>
          <TextField name="cui" label="DPI" type="number"
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="job" label="Ocupación" type="text"
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="civil_status" label="Estado Civil" type="text"
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="observations" label="Observaciones" type="text" multiline={true}
                     className={classes.textField} onChange={handleChange}/> <br/>
          <TextField name="insurance" label="Seguro Médico" type="text"
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="personal_doctor" label="Médico Personal" type="text"
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="alergies" label="Alergias" type="text"
                     className={classes.textField} onChange={handleChange}/>
        </div>

        <div>
          <Button className={classes.button} onClick={this.back}>
            Atrás
          </Button>
          <Button className={classes.button} onClick={this.continue} variant="contained" color="primary">
            Siguiente
          </Button>
        </div>
      </div>
    );
  }
}

DetailsForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsForm);