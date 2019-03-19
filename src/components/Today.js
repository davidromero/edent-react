import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/TodayStyle';

class Today extends Component{

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.base}>
        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Hoy
          </Typography>
          <Typography component="p">
            Actividades para hoy
          </Typography>
        </Paper>
      </div>
    )
  }
}

Today.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Today);