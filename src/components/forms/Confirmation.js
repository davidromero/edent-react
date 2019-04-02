import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText'
import Button from "@material-ui/core/Button";

class Confirmation extends Component {

  state = {
    avatar: null,
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
    const {
      values: {
        first_name, last_name, sex, phone_number, email, birthday, location,
        address, visit_reason, kinship, relative_name, relative_phone, relative_email,
        cui, job, civil_status, observations, insurance, personal_doctor, alergies,
      },
      classes,
    } = this.props;


    return (
      <div>
        <div className={classes.base}>
          <Avatar className={classes.avatar} src={this.state.avatar}/>
          <div className={classes.container}>
            <Paper className={classes.item}>
              <p><b>Información Personal</b></p>
              <ListItemText primary={"Nombres y Apellidos"} secondary={first_name + " " + last_name}/>
              <ListItemText primary={"Fecha de Nacimiento"} secondary={birthday}/>
              <ListItemText primary={"Sexo"} secondary={sex}/>
              <ListItemText primary={"Dirección"} secondary={address}/>
            </Paper>
            <Paper className={classes.item}>
              <p><b>Contacto Personal</b></p>
              <ListItemText primary={"Número Telefónico"} secondary={phone_number}/>
              <ListItemText primary={"Correo Electrónico"} secondary={email}/>
              <ListItemText primary={"Clínica"} secondary={location}/>
              <ListItemText primary={"Motivo de Visita"} secondary={visit_reason}/>
            </Paper>
            <Paper className={classes.item}>
              <p><b>Contacto Familiar</b></p>
              <ListItemText primary={"Parentezco"} secondary={kinship}/>
              <ListItemText primary={"Nombre del Familiar"} secondary={relative_name}/>
              <ListItemText primary={"Número Telefónico"} secondary={relative_phone}/>
              <ListItemText primary={"Correo Electrónico"} secondary={relative_email}/>
            </Paper>
            <Paper className={classes.item}>
              <p><b>Detalles Adicionales</b></p>
              <ListItemText primary={"DPI"} secondary={cui}/>
              <ListItemText primary={"Ocupación"} secondary={job}/>
              <ListItemText primary={"Estado Civil"} secondary={civil_status}/>
              <ListItemText primary={"Observaciones"} secondary={observations}/>
              <ListItemText primary={"Seguro Médico"} secondary={insurance}/>
              <ListItemText primary={"Médico Personal"} secondary={personal_doctor}/>
              <ListItemText primary={"Alergias"} secondary={alergies}/>
            </Paper>
          </div>
        </div>

        <Button className={classes.button} onClick={this.back}>
          Atrás
        </Button>
        <Button className={classes.button} onClick={this.continue} variant="contained" color="primary">
          Siguiente
        </Button>
      </div>
    );
  }
}


const styles = theme => ({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  item: {
    margin: theme.spacing.unit * 0.5,
    minWidth: "240px",
    display: "inline-block",
    padding: theme.spacing.unit ,
  },
  avatar: {
    height: "150px",
    width: "150px",
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
});


export default withStyles(styles)(Confirmation);