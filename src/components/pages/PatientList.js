import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import {dateTimeFormat, capitalize} from '../../utils/utils';
import axios from "axios";
import "../styles/PagesStyle.css";
import {filterPatientList} from '../../utils/utils';

const PatientList = (props) => {
  const {patientNameFiltering} = props;
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients")
      .then((res) => {
//        console.log(filterPatientList(res.data.payload, "elder"));
        setPatientList(res.data.payload);
      })
      .catch((error) => {
      });
  }, []);

  function PropChangeWatch({a}) {
    useEffect(() => {
      console.log("value of 'a' changed to", a);
    }, [a]);

    return (
      <div>
      
      </div>
    );
  };

  return (
    <div className={"page-container"}>
      {<PropChangeWatch a={patientNameFiltering}/>}
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Pacientes</h2>
        <h3>Lista de Pacientes</h3>
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