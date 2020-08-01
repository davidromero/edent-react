import React, {useEffect, useState} from "react";
import {Paper, MenuItem, InputLabel, FormControl, Select, Input} from "@material-ui/core";
import {Link} from "react-router-dom";
import {dateTimeFormat, capitalize, filterPatientList} from '../../utils/utils';
import axios from "axios";
import "../styles/PagesStyle.css";

const PatientList = (props) => {
  const {search} = props;
  const [patientList, setPatientList] = useState([]);
  const [originalPatientList, setOriginalPatientList] = useState([]);
  const [filter, setFilter] = useState({clinic: "", doctor: ""});

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients")
      .then((res) => {
        setOriginalPatientList(res.data.payload);
        setPatientList(res.data.payload);
      })
      .catch((error) => {
      });
  }, []);

  useEffect(() => {
    setPatientList(filterPatientList(originalPatientList, search, filter));
  }, [originalPatientList, filter, search]);

  const handleChange = (e) => {
    const newFilter = {...filter, [e.target.name]: e.target.value};
    setFilter(newFilter);
    setPatientList(filterPatientList(originalPatientList, search, newFilter));
  };

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
          <div>
            <h2>Pacientes</h2>
            <h3>Lista de Pacientes</h3>
          </div>
          <PatientFilter filter={filter} handleChange={handleChange}/>
        </div>
      </Paper>
      {patientList.length === 0 ? <h2>Cargando...</h2> : <></>}
      {
        patientList && patientList.map((patient, index) => {
          return (
            <PatientCard patient={patient} key={index}/>
          );
        })
      }
    </div>
  );
};

const PatientCard = (props) => {
  const {patient} = props;

  return (
    <Link to={"patients/" + patient.uid} style={{textDecoration: 'none', color: 'inherit'}}>
      <Paper className={"simple-paper"}>
        <p>
          <b style={{
            textTransform: "capitalize",
            fontSize: "1.1em"
          }}>{patient.first_name + " " + patient.last_name}</b><br/><br/>
          Razón de visita: {capitalize(patient.visit_reason)}<br/>
          Clínica: {capitalize(patient.clinic_location)}<br/>
          Doctor(es): {patient.doctor_names !== undefined && Array.isArray(patient.doctor_names)
          ? capitalize(patient.doctor_names.join(", ")) : "No Asignado"}<br/>
        </p>
        <small><i>Última modificación: {dateTimeFormat(patient.modified_timestamp)}</i></small>
      </Paper>
    </Link>
  );
};

const PatientFilter = (props) => {
  const {filter, handleChange} = props;

  return (
    <div className={"patient-filter"}>
      <FormControl style={{margin: "8px", width: "180px"}}>
        <InputLabel id="location">Clínica</InputLabel>
        <Select className={"selectEmpty"} name={"clinic"} onChange={handleChange}
                value={filter.clinic} input={<Input name={"location"}/>}>
          <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
          <MenuItem value={"jocotan"}>Jocotán</MenuItem>
          <MenuItem value={""}>Ninguno</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{margin: "8px", width: "180px"}}>
        <InputLabel id="doctor">Doctores</InputLabel>
        <Select className={"selectEmpty"} name={"doctor"} onChange={handleChange}
                value={filter.doctor} input={<Input name={"doctor"}/>}>
          <MenuItem value={"dra. hilda peralta"}>Dra. Hilda Peralta</MenuItem>
          <MenuItem value={"dra. rocio peralta"}>Dra. Rocio Peralta</MenuItem>
          <MenuItem value={""}>Ninguno</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export {PatientList};