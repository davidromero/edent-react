import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper/index";
import {Link} from "react-router-dom";
import {dateFormat, capitalize} from '../../utils'
import axios from "axios";
import "../styles/PagesStyle.css";


const PatientList = () => {
  const [patientList, setPatientList] =  useState([]);

  useEffect(() => {
    console.log("Fetching patients...");
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients")
      .then( (res) => {
        console.log("Patients fetched from API");
        setPatientList(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={"pageContainer"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Pacientes</h2>
        <h3>Lista de Pacientes</h3>
      </Paper>
      {
        patientList && patientList.map((patient, index) => {
          return (
            <Link to={"patient/" + patient.uid} key={index} style={{ textDecoration: 'none', color: 'inherit'}}>
              <Paper className={"simplePaper"}>
                <p>
                  <b style={{textTransform: "capitalize", fontSize: "1.1em"}}>{patient.first_name + " " + patient.last_name}</b><br/><br/>
                  Razón de visita: {capitalize(patient.visit_reason)}<br/>
                  Clínica: {capitalize(patient.clinic_location)}<br/>
                </p>
                <small><i>Última modificación: {dateFormat(patient.modified_timestamp)}</i></small>
              </Paper>
            </Link>
          )
        })
      }
    </div>
  )
};

export {PatientList}