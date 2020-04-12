import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper/index";
import Avatar from "@material-ui/core/Avatar/index";
import Typography from "@material-ui/core/Typography/index";
import styles from "../styles/ContactDetailStyle";

class ContactDetail extends Component {

  componentDidMount() {
    const {contact} = this.props;
    contact ?
      console.log("truuee") :
      console.log("falseee");
  }

  render() {
    const {classes, contact} = this.props;
    return (
      contact ? (
        <div className={classes.base}>
          <Paper className={classes.paper} elevation={2}>

            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}/>
            </div>
            <div className={classes.container}>
              <Typography className={classes.typo} variant="h5" component="h3">
                {"Paciente: " + contact.first_name + " " + contact.last_name}
              </Typography>
              <Typography className={classes.typo} variant="h5" component="h3">
                {"Teléfono: " + contact.phone_number}
              </Typography>
              <Typography className={classes.typo} variant="h5" component="h3">
                {"Email: " + contact.email}
              </Typography>
              <Typography className={classes.typo} variant="h5" component="h3">
                {"Clínica: " + contact.location}
              </Typography>
            </div>
            <div className={classes.container}>
              <Typography className={classes.typo} variant="h5" component="h3">
                {"Contacto Adicional: " + contact.additional_contact.relative_name}
              </Typography>
            </div>
          </Paper>

        </div>
      ) : (
        <div className={classes.base}>
          <Paper className={classes.paper} elevation={2}>
            <Typography variant="h5" component="h3">
              Cargando...
            </Typography>
          </Paper>
          {/*{this.props.dispatch(fetchContactList())}*/}
        </div>
      )
    );
  }
}


export default withStyles(styles)(ContactDetail);