import {Paper} from "@material-ui/core";
import React, {useState} from "react";
import {NewBudgetModal} from "./Modals";


const ServiceDetailBudget = (props) => {
  const {serviceName, treatmentId} = props;

  return (
    <Paper className={"small-paper"} elevation={2}>
      <h2 style={{textTransform: "capitalize", margin: "15px"}}><b>{serviceName}</b></h2>
      <ServiceButtons  treatment_id={treatmentId}/>
    </Paper>
  );
};

const ServiceButtons = (props) => {
  const {treatment_id} = props;

  return (
    <div style={{width: "200px"}}>
      <StartTreatmentButton  treatment_id={treatment_id}/>
    </div>
  );
};


const StartTreatmentButton = (props) => {
  const {treatment_id} = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NewBudgetModal isOpen={isOpen}
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


export {ServiceDetailBudget};