import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import styles from "./styles/FormsStyle";

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
    const { classes } = this.props;

    return (
      <div>
        <div>
          <Avatar className={classes.avatar} src={this.state.avatar}/>
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


export default withStyles(styles)(Confirmation);