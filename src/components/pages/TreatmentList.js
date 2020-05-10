import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from 'axios/index';
import "../styles/PagesStyle.css";

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
  const {uid} = props.match.params
  const {patient} = props;
  const treatmentType = "seguro";
  const [treatmentMenu, setTreatmentMenu] = useState();
  const [checkout, setCheckout] = useState();

  useEffect( () => {setMenu()}, [])

  const setMenu = () => {
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

  const addTreatment = (treatment) => {
    console.log(treatment)
    setCheckout(treatment.treatment_name)
  };

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        {patient ?
          <h2 style={{textTransform: "capitalize"}}>Nuevo Tratamiento: {patient.first_name + " " + patient.last_name}</h2> :
          <h2>Nuevo Tratamiento</h2>}
        <h3 style={{textTransform: "capitalize"}}>{treatmentType}</h3>
      </Paper>
      <div style={{display: "table-column", width: "100%"}}>
        <TreatmentCheckout checkout={checkout}/>
        <div className={"side-content"}>
          <div className={"menu-container"}>
            {
              treatmentMenu && treatmentMenu.map((treatment, index) => {
                return (
                  <Paper className={"menu-button"} key={index}
                         onClick={() => {addTreatment(treatment)}}>
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
  const {checkout} = props;

  return (
    <Paper className={"lateral-paper"} elevation={2}>
      <p><b>Tratamientos Agregados:</b></p>

      {}
    </Paper>
  )
}


export {TreatmentList};