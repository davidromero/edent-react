import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import ImagePicker from "./ImagePicker"
import styles from "./styles/NewPatientFormStyle";

class GeneralForm extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, values, handleChange} = this.props;

    return (
      <div>
        <ImagePicker/>
        <br/>
        <div>
          <TextField name="first_name" label="Nombres" type="text" required
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="last_name" label="Apellidos" type="text" required
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="birthday" label="Fecha de Nacimiento MM/DD/AAAA" defaultValue="2000-12-31" required
                     className={classes.datePicker} type="date" onChange={handleChange}
                     InputLabelProps={{shrink: true,}}/>
          <RadioGroup className={classes.genderGroup} onChange={handleChange} name="sex"
                      value={values.sex}>
            <FormHelperText>Sexo *</FormHelperText>
            <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
            <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
          </RadioGroup>
          <TextField name="phone_number" label="Número Telefónico" type="number"
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="address" label="Dirección" type="text"
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="visit_reason" label="Motivo de Visita" type="text" multiline={true}
                     className={classes.textField} onChange={handleChange} margin="normal"/>
        </div>

        <Button className={classes.button} onClick={this.continue} variant="contained" color="primary">
          Siguiente
        </Button>
      </div>
    );
  }
}

GeneralForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralForm);