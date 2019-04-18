import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./styles/FormsStyle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

class GeneralForm extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {classes, values, handleChange} = this.props;

    return (
      <div>
        <div>
          <TextField name="first_name" label="Nombres" type="text" required
                     className={classes.textField} onChange={handleChange} value={values.first_name}/>
          <TextField name="last_name" label="Apellidos" type="text" required
                     className={classes.textField} onChange={handleChange} value={values.last_name}/>
          <TextField name="birthday" label="Fecha de Nacimiento MM/DD/AAAA" defaultValue="2000-12-31" required
                     className={classes.datePicker} type="date" onChange={handleChange} value={values.birthday}
                     InputLabelProps={{shrink: true,}}/>
          <RadioGroup className={classes.genderGroup} onChange={handleChange} name="sex" value={values.sex}>
            <FormHelperText id="component-helper-text">Sexo *</FormHelperText>
            <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
            <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
          </RadioGroup>
          <FormControl className={classes.selectControl}>
            <InputLabel htmlFor="location-helper">Clínica</InputLabel>
            <Select className={classes.selectEmpty} value={values.location}
                    onChange={handleChange} input={<Input name="location" id="location-helper"/>}>
              <MenuItem value="Chiquimula">Chiquimula</MenuItem>
              <MenuItem value={"Jocotán"}>Jocotán</MenuItem>
              <MenuItem value={"Amatitlán"}>Amatitlán</MenuItem>
              <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
            </Select>
          </FormControl>
          <br/>
          <TextField name="phone_number" label="Número Telefónico" type="number"
                     className={classes.textField} onChange={handleChange} value={values.phone_number}/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={classes.textField} onChange={handleChange} value={values.email}/>
          <TextField name="address" label="Dirección" type="text"
                     className={classes.textField} onChange={handleChange} value={values.address}/>
          <TextField name="visit_reason" label="Motivo de Visita" type="text" multiline={true}
                     className={classes.textField} onChange={handleChange} value={values.visit_reason}/>
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