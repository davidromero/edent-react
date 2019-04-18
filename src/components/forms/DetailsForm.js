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
    const {classes, values, handleChange} = this.props;

    return (
      <div>
        <div>
          <TextField name="cui" label="DPI" type="number" value={values.cui}
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="job" label="Ocupación" type="text" value={values.job}
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="civil_status" label="Estado Civil" type="text" value={values.civil_status}
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="observations" label="Observaciones" type="text" multiline={true} value={values.observations}
                     className={classes.textField} onChange={handleChange}/> <br/>
          <TextField name="insurance" label="Seguro Médico" type="text" value={values.insurance}
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="personal_doctor" label="Médico Personal" type="text" value={values.personal_doctor}
                     className={classes.textField} onChange={handleChange}/>
          <TextField name="allergies" label="Alergias" type="text" value={values.allergies}
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