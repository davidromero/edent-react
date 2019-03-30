import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import styles from "./styles/FormsStyle";

class Today extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div>
          <GridList>
            <ListItem>Nombre: Aldo</ListItem>
            <ListItem>Apellido: Gatica</ListItem>
            <ListItem>Edad: 24 años</ListItem>
            <ListItem>Motivo de visita: Ortodoncia</ListItem>
          </GridList>
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


export default withStyles(styles)(Today);