import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from '../../styles/PatientFormStyle';
import FormSteps from "./FormSteps";


function getSteps() {
  return ['Datos Generales', 'Datos Familiares', 'Historia Médica'];
}

class PatientForm extends Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className={classes.stepLabel} children={''}/>
              <StepContent>
                <FormSteps/>
                <div>
                  <Button onClick={this.handleBack} className={classes.button}
                    disabled={activeStep === 0} >
                    Atrás
                  </Button>
                  <Button onClick={this.handleNext} className={classes.button}
                    variant="contained" color="primary" >
                    {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography component="h1" variant="h5">Paciente correctamente ingresado</Typography>
          </Paper>
        )}
      </div>
    );
  }
}

PatientForm.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PatientForm);