import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/ContactsStyle';

class Contacts extends Component{

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.base}>
        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Contactos
          </Typography>
          <Typography component="p">
            Contactos
          </Typography>
        </Paper>

      </div>
    )
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contacts);