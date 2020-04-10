import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText'
import Button from "@material-ui/core/Button";

class Confirmation extends Component {

  submit = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {classes, values} = this.props;

    return (
      <div>
        <div className={classes.base}>
          <div className={classes.container}>
            <Paper className={classes.paper}>
              <p><b>Información Personal</b></p>
              <ListItemText primary={"Nombres y Apellidos"} secondary={values.first_name + " " + values.last_name}/>
              <ListItemText primary={"Fecha de Nacimiento"} secondary={values.birthday}/>
              <ListItemText primary={"Sexo"} secondary={values.sex}/>
              <ListItemText primary={"Dirección"} secondary={values.address}/>
            </Paper>
            <Paper className={classes.paper}>
              <p><b>Contacto Personal</b></p>
              <ListItemText primary={"Número Telefónico"} secondary={values.phone_number}/>
              <ListItemText primary={"Correo Electrónico"} secondary={values.email}/>
              <ListItemText primary={"Clínica"} secondary={values.location}/>
              <ListItemText primary={"Motivo de Visita"} secondary={values.visit_reason}/>
            </Paper>
            <Paper className={classes.paper}>
              <p><b>Contacto Familiar</b></p>
              <ListItemText primary={"Parentezco"} secondary={values.kinship}/>
              <ListItemText primary={"Nombre del Familiar"} secondary={values.relative_name}/>
              <ListItemText primary={"Número Telefónico"} secondary={values.relative_phone}/>
              <ListItemText primary={"Correo Electrónico"} secondary={values.relative_email}/>
            </Paper>
            <Paper className={classes.paper}>
              <p><b>Detalles Adicionales</b></p>
              <ListItemText primary={"DPI"} secondary={values.cui}/>
              <ListItemText primary={"Ocupación"} secondary={values.job}/>
              <ListItemText primary={"Estado Civil"} secondary={values.civil_status}/>
              <ListItemText primary={"Observaciones"} secondary={values.observations}/>
              <ListItemText primary={"Seguro Médico"} secondary={values.insurance}/>
              <ListItemText primary={"Médico Personal"} secondary={values.personal_doctor}/>
              <ListItemText primary={"Alergias"} secondary={values.allergies}/>
            </Paper>
          </div>
        </div>

        <Button className={classes.button} onClick={this.back}>
          Atrás
        </Button>
        <Button className={classes.button} onClick={this.submit} variant="contained" color="primary">
          Confirmar y Guardar
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
  paper: {
    margin: theme.spacing * 0.5,
    minWidth: "240px",
    display: "inline-block",
    padding: theme.spacing ,
  },
  button: {
    margin: theme.spacing * 2,
  },
});


export default withStyles(styles)(Confirmation);