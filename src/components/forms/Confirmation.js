import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
      <main>
        <Button className={classes.button} onClick={this.back}>
          Atrás
        </Button>
        <Button className={classes.button} onClick={this.continue} variant="contained" color="primary">
          Siguiente
        </Button>
      </main>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
};

export default withStyles(styles)(Today);