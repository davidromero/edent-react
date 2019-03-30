import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Typography from "@material-ui/core/Typography";
import GeneralForm from "./forms/GeneralForm";
import DetailsForm from "./forms/DetailsForm";
import RelativesForm from "./forms/RelativesForm";
import Confirmation from "./forms/Confirmation";
import styles from "./styles/NewPatientStyle";


function getSteps() {
  return ["Datos Generales", "Datos Familiares", "Detalles Adicionales", "Confirmación"];
}

class NewPatient extends Component {

  state = {
    step: 0,
  };

  handleNext = () => {
    const {step} = this.state;
    this.setState({step: step + 1})
  };

  handleBack = () => {
    const {step} = this.state;
    this.setState({step: step - 1})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  renderSteps = (step, values) => {
    switch (step) {
      case 0:
        return (
          <GeneralForm
            nextStep={this.handleNext}
            handleChange={this.handleChange}
            values={values}/>
        );
      case 1:
        return (
          <div>
            <RelativesForm
              prevStep={this.handleBack}
              nextStep={this.handleNext}
              handleChange={this.handleChange}
              values={values}/>
          </div>
        );
      case 2:
        return (
          <DetailsForm
            prevStep={this.handleBack}
            nextStep={this.handleNext}
            handleChange={this.handleChange}
            values={values}/>
        );
      case 3:
        return (
          <Confirmation
            prevStep={this.handleBack}
            nextStep={this.handleNext}
            handleChange={this.handleChange}
            values={values}/>
        );
      default:
        return null;
    }
  };

  render() {
    const {classes} = this.props;
    const steps = getSteps();
    const {step} = this.state;
    const {first_name, last_name, birthday, sex, phone_number, address, email} = this.state;
    const values = {first_name, last_name, birthday, sex, phone_number, address, email};

    return (
      <Paper className={classes.paper} elevation={2} square={false}>
        <Stepper className={classes.stepper} activeStep={step} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>
                <Typography component="h1" variant="h6">
                  {label}
                </Typography>
              </StepLabel>
              <StepContent>
                {this.renderSteps(index, values)}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {step === steps.length && (
          <div className={classes.resultContainer}>
            <Typography component="h1" variant="h5">El paciente ha sido ingresado</Typography>
          </div>
          //  TODO mostrar resultado
        )}
      </Paper>
    );
  }
}

NewPatient.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NewPatient);