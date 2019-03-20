import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from '../../styles/GeneralFormStyle';

class GeneralForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    birthday: '',
    sex: '',
    phone_number: '',
    address: '',
    email: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {classes} = this.props;

    return (
      <main className={classes.main}>
        <Typography component="h1" variant="h5">
          Datos Generales
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <FormControl className={classes.formControl} margin="normal" required>
            <TextField name="first_name" label="Nombres" type='text'
                       className={classes.textField} onChange={this.handleChange} margin="normal"/>
            <TextField name="last_name" label="Apellidos" type='text'
                       className={classes.textField} onChange={this.handleChange} margin="normal"/>
            <TextField name="birthday" label="Fecha de Nacimiento" defaultValue="2019-01-01"
                       className={classes.datePicker} type="date" InputLabelProps={{shrink: true,}}/>
            <RadioGroup className={classes.genderGroup} onChange={this.handleChange}
                        aria-label="Sexo" name="sex" value={this.state.value}>
              <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
              <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
            </RadioGroup>
            <TextField name="phone_number" label="Número Telefónico" type='number'
                       className={classes.textField} onChange={this.handleChange} margin="normal"/>
            <TextField name="email" label="Correo Electrónico" type='email'
                       className={classes.textField} onChange={this.handleChange} margin="normal"/>
            <TextField name="address" label="Dirección" type='text'
                       className={classes.textField} onChange={this.handleChange} margin="normal"/>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" className={classes.submit}>
            Guardar Información
          </Button>
        </form>
      </main>
    )
  }
}

GeneralForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralForm);