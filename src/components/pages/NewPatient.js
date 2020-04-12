import React, {useState} from "react";
import Paper from "@material-ui/core/Paper/index";
import Stepper from "@material-ui/core/Stepper/index";
import Step from "@material-ui/core/Step/index";
import StepLabel from "@material-ui/core/StepLabel/index";
import StepContent from "@material-ui/core/StepContent/index";
import GeneralForm from "../forms/GeneralForm";
import DetailsForm from "../forms/DetailsForm";
import RelativesForm from "../forms/RelativesForm";
import Confirmation from "../forms/Confirmation";
import "../styles/PagesStyle.css";

const NewPatient = (props) => {
  const {createPatient} = props;

  const [step, setStep] = useState(0);
  const [patient, setPatient] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(step + 1);
    createPatient(patient);
  };

  const handleChange = (e) => {
    setPatient({...patient, [e.target.name]: e.target.value})
  };

  const renderSteps = (step, contact) => {
    switch (step) {
      case 0:
        return (
          <GeneralForm nextStep={handleNext} handleChange={handleChange}
                       values={patient}/>
        );
      case 1:
        return (
          <RelativesForm prevStep={handleBack} nextStep={handleNext}
                         handleChange={handleChange} values={patient}/>
        );
      case 2:
        return (
          <DetailsForm prevStep={handleBack} nextStep={handleNext}
                       handleChange={handleChange} values={patient}/>
        );
      case 3:
        return (
          <Confirmation prevStep={handleBack} nextStep={handleSubmit}
                        handleChange={handleChange} values={patient}/>
        );
      default:
        return null;
    }
  };

  const steps = ["Datos Generales", "Datos Familiares", "Detalles Adicionales", "Confirmación"];

  return (
    <div className={"pageContainer"}>
      <Paper className={"widePaper"} elevation={2} square={false}>
        <h2>Nuevo Paciente</h2>
        <Stepper className={"stepper"} activeStep={step} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
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