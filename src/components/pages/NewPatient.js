import React, {useState} from "react";
import {Paper, Stepper, Step, StepLabel, StepContent} from "@material-ui/core";
import {GeneralForm, ContactForm, Confirmation} from "../forms/PatientForm";
import {patientTemplate} from "../../utils/utils";
import axios from "axios";
import "../styles/PagesStyle.css";

const NewPatient = (props) => {
  const [step, setStep] = useState(0);
  const [patient, setPatient] = useState(patientTemplate);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(step + 1);

    console.log(JSON.stringify(patient))
    axios.post('https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients',
      JSON.stringify(patient), {headers:{'Content-Type': 'application/json'}})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  };

  const handleChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value})
  };

  const renderSteps = (step, patient) => {
    switch (step) {
      case 0:
        return <GeneralForm nextStep={handleNext} handleChange={handleChange} patient={patient}/>;
      case 1:
        return <ContactForm prevStep={handleBack} nextStep={handleNext} handleChange={handleChange} patient={patient}/>;
      case 2:
        return <Confirmation prevStep={handleBack} nextStep={handleSubmit} patient={patient}/>
      default:
        return null;
    }
  };

  const steps = ["Datos Generales", "Contacto", "Confirmación"];

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Nuevo Paciente</h2>
        <Stepper className={"stepper"} activeStep={step} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>
                <h3>{label}</h3>
              </StepLabel>
              <StepContent>
                {renderSteps(index, patient)}
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {step === steps.length && (
          <div>
            <h3>El paciente ha sido ingresado</h3>
          </div>
        )}
      </Paper>
    </div>

  )
};


export {NewPatient};