import {Paper} from "@material-ui/core";
import React, {useState} from "react";
import {NewTreatmentModal} from "./Modals";


const ServiceDetail = (props) => {
  const {patient, serviceName, treatmentId} = props;

  return (
    <Paper className={"small-paper"} elevation={2} style={{maxHeight: "115px"}}>
      <h2 style={{textTransform: "capitalize", margin: "15px"}}><b>{serviceName}</b></h2>
      <ServiceButtons patient={patient} treatment_id={treatmentId}/>
    </Paper>
  );
};

const ServiceButtons = (props) => {
  const {patient, treatment_id} = props;

  return (
    <div style={{width: "200px"}}>
      <StartTreatmentButton uid={patient.uid} treatment_id={treatment_id} patient={patient}/>
    </div>
  );
};


const StartTreatmentButton = (props) => {
  const {uid, treatment_id, patient} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NewTreatmentModal uid={uid} patient={patient} isOpen={isOpen}
                         treatmentId={treatment_id} closeModal={() => {
        setIsOpen(false);
      }}/>
      <button className="mid-paper-button" onClick={() => {
        setIsOpen(true);
      }}>Iniciar tratamiento
      </button>
    </>
  );
};


export {ServiceDetail};