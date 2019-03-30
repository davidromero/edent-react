import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./styles/NewPatientFormStyle";


class RelativesForm extends Component {

  state = {
    name: "",
    phone_number: "",
    email: "",
    relative_type: "",
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {classes, handleChange} = this.props;

    return (
      <div>
        <div>
          <FormControl className={classes.selectControl}>
            <InputLabel htmlFor="relative-helper">Parentezco</InputLabel>
            <Select className={classes.selectEmpty} value={this.state.relative_type}
                    onChange={handleChange} input={<Input name="relative_type" id="relatives-helper"/>}>
              <MenuItem value=""> <em>Ninguno</em> </MenuItem>
              <MenuItem value="Padre">Padre</MenuItem>
              <MenuItem value={"Madre"}>Madre</MenuItem>
              <MenuItem value={"Conyuge"}>Conyuge</MenuItem>
              <MenuItem value={"Otro"}>Otro</MenuItem>
            </Select>
          </FormControl>
          <TextField name="name" label="Nombre" type="text" required
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="phone_number" label="Número Telefónico" type="number"
                     className={classes.textField} onChange={handleChange} margin="normal"/>
          <TextField name="email" label="Correo Electrónico" type="email"
                     className={classes.textField} onChange={handleChange} margin="normal"/>
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

RelativesForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RelativesForm);