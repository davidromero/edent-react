import React, {useEffect, useState, useCallback} from "react";
import {Paper, MenuItem, InputLabel, FormControl, Select, Input} from "@material-ui/core";
import {Link} from "react-router-dom";
import {dateTimeFormat, capitalize} from '../../utils/utils';
import axios from "axios";
import "../styles/PagesStyle.css";
import {filterPatientList} from '../../utils/utils';

const PatientList = (props) => {
  const [patientList, setPatientList] = useState([]);
  const [rawPatientList, setRawPatientList] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [clinic, setclinic] = useState("");

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients")
    .then((res) => {
      setRawPatientList(res.data.payload);
    })
    .catch((error) => {
    });
  }, [patientList]);

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients")
      .then((res) => {
        setPatientList(res.data.payload);
      })
      .catch((error) => {
      });
  }, []);

  const handleChange = useCallback((e) => {
    if(e.target.name === "doctor_list"){
      setclinic("");
      setDoctor(e.target.value);
    }
    else if(e.target.name === "clinic_location"){
      setDoctor("");
      setclinic(e.target.value);
    }
    (e.target.value === 'ninguno') ? (setPatientList(rawPatientList)) : (setPatientList(filterPatientList(rawPatientList, e.target.value)));
  }, [rawPatientList]);

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Pacientes</h2>
        <h3>Lista de Pacientes</h3>
        <div className={"patient-filter"}>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="location">Clínica</InputLabel>
          <Select className={"selectEmpty"} name={"clinic_location"}
                  value={(clinic) ? (clinic) : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"jocotan"}>Jocotán</MenuItem>
            <MenuItem value={"ninguno"}>Ninguno</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="doctor">Doctores</InputLabel>
          <Select className={"selectEmpty"} name={"doctor_list"}
                  value={(doctor) ? (doctor) : ""}
                  onChange={handleChange} input={<Input name={"doctor"}/>}>
            <MenuItem value={"dra. hilda peralta"}>Dra. Hilda Peralta</MenuItem>
            <MenuItem value={"dra. rocio peralta"}>Dra. Rocio Peralta</MenuItem>
            <MenuItem value={"ninguno"}>Ninguno</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Paper>
      {patientList.length === 0 ? <h2>Cargando...</h2> : <></>}
      {
        patientList && patientList.map((patient, index) => {
          return (
            <Link to={"patients/" + patient.uid} key={index} style={{textDecoration: 'none', color: 'inherit'}}>
              <Paper className={"simple-paper"}>
                <p>
                  <b style={{
                    textTransform: "capitalize",
                    fontSize: "1.1em"
                  }}>{patient.first_name + " " + patient.last_name}</b><br/><br/>
                  Razón de visita: {capitalize(patient.visit_reason)}<br/>
                  Clínica: {capitalize(patient.clinic_location)}<br/>
                  Doctor(es): { patient.doctor_names !== undefined && Array.isArray(patient.doctor_names)
                  ? capitalize(patient.doctor_names.join(", ")) : "No Asignado"}<br/>
                </p>
                <small><i>Última modificación: {dateTimeFormat(patient.modified_timestamp)}</i></small>
              </Paper>
            </Link>
          );
        })
      }
    </div>
  );
};

export {PatientList};