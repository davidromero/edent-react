import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from '../styles/DashboardStyle';

class Dashboard extends Component{

  render(){
    const { classes } = this.props;

    return (
      <div className={classes.base}>
        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Pacientes en espera
          </Typography>
          <Typography component="p">
            10
          </Typography>
        </Paper>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Siguiente Paciente
          </Typography>
          <Typography component="p">
            Aldo Gatica.
            Ortodoncia
            10:00 am
          </Typography>
        </Paper>

        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Pacientes ingresados
          </Typography>
          <Typography component="p">
            2
          </Typography>
        </Paper>
      </div>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);