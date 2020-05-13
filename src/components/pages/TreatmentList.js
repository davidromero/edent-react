import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from 'axios/index';
import "../styles/PagesStyle.css";
import {Prompt} from "react-router-dom";

const operatoriaMenu = [
  {treatment_uid: "123", treatment_name: "Resina"},
  {treatment_uid: "124", treatment_name: "Carilla"},
  {treatment_uid: "125", treatment_name: "Amalgama"},
  {treatment_uid: "126", treatment_name: "Relleno blanco en cápsula"},
  {treatment_uid: "125", treatment_name: "Limpieza con detrartaje"},
  {treatment_uid: "125", treatment_name: "Exodoncia"},
  {treatment_uid: "125", treatment_name: "Prótesis"},
  {treatment_uid: "125", treatment_name: "Cementación"},
  {treatment_uid: "125", treatment_name: "Blanqueamiento"},
  {treatment_uid: "125", treatment_name: "Casquitos"},
  {treatment_uid: "125", treatment_name: "Coronas"},
]
const seguroMenu = [
  {treatment_uid: "123", treatment_name: "Evaluación"},
  {treatment_uid: "124", treatment_name: "Limpieza"},
  {treatment_uid: "125", treatment_name: "Amalgama"},
  {treatment_uid: "126", treatment_name: "Exodoncia Leche"},
  {treatment_uid: "126", treatment_name: "Exodoncia Adulto"},
]
const endodonciaMenu = [
  {treatment_uid: "123", treatment_name: "TCR 1"},
  {treatment_uid: "124", treatment_name: "TCR 2"},
  {treatment_uid: "125", treatment_name: "TCR 3"},
]
const cirugiaMenu = [
  {treatment_uid: "123", treatment_name: "Cordales"},
  {treatment_uid: "124", treatment_name: "Frenectomía"},
]

const TreatmentList = (props) => {
  const {uid} = props.match.params;
  const [treatmentMenu, setTreatmentMenu] = useState();
  const [checkout, setCheckout] = useState([]);
  const [treatmentType, setTreatmentType] = useState();
  const [patient, setPatient] = useState();

  useEffect( () => {initValues()})

  const initValues = () => {
    const {TreatmentProp, Patient} = props.location;
    if(TreatmentProp !== undefined){
      localStorage.setItem("patient", JSON.stringify(Patient));
      localStorage.setItem("treatment-type", TreatmentProp);
      setTreatmentType(TreatmentProp);
      setPatient(Patient);
    }
    else{
      setPatient(JSON.parse(localStorage.getItem("patient")));
      setTreatmentType(localStorage.getItem("treatment-type"));
    }
    if (treatmentType === "operatoria") {
      setTreatmentMenu(operatoriaMenu);
    } else if (treatmentType === "seguro") {
      setTreatmentMenu(seguroMenu);
    } else if (treatmentType === "endodoncia") {
      setTreatmentMenu(endodonciaMenu);
    } else if (treatmentType === "cirugia") {
      setTreatmentMenu(cirugiaMenu);
    }
  };

  const addNewTreatment = (treatment) => {
    if(checkout.length < 9){
      setCheckout([...checkout, {id: checkout.length, name: treatment.treatment_name}]);
    }
  };

  const removeTreatment = (idx) => {
    const temp = [...checkout];
    if (temp.length > 1){
      temp.splice(idx, 1);
      setCheckout(temp);
    }
    else{
      setCheckout([]);
    }
  };


  return (
    <div className={"page-container"}>
      <Prompt
        when={true}
        message='Al salir el tratamiento se cancelará. ¿Está seguro?'
      />
      <Paper className={"wide-paper"} elevation={2} square={false}>
        {patient ?
          <h2 style={{textTransform: "capitalize"}}>Nuevo Tratamiento: {patient.first_name + " " + patient.last_name}</h2> :
          <h2>Nuevo Tratamiento</h2>}
        <h3 style={{textTransform: "capitalize"}}>{treatmentType}</h3>
      </Paper>
      <div style={{display: "table-column", width: "100%", justifyContent: "center"}}>
        <TreatmentCheckout checkout={checkout} remove={removeTreatment}/>
        <div className={"side-content"}>
          <div className={"menu-container"}>
            {
              treatmentMenu && treatmentMenu.map((treatment, index) => {
                return (
                  <Paper className={"menu-button"} key={index} onClick={() => {addNewTreatment(treatment)}}>
                    <h2>{treatment.treatment_name}</h2>
                  </Paper>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

const TreatmentCheckout = (props) => {
  const {checkout, remove} = props;

  return (
    <Paper className={"lateral-paper"} elevation={2}>
      <h3><b>Tratamientos en Progreso:</b></h3>
      {
        checkout.map((treatment, idx) =>
          <TreatmentItem key={idx} idx={idx} treatment={treatment} remove={remove}/>)
      }
    </Paper>
  )
}

const TreatmentItem = (props) => {
  const {idx, treatment, remove} = props;

  return(
    <div className={"participant-background"} key={idx}>
      {treatment.name}
      <button style={{width: "20%"}} className={"participant-button"} onClick={() => {remove(idx)}}>-</button>
    </div>
  )
}

export {TreatmentList};