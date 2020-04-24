import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";
import placeholder from "../../assets/img/profile_placeholder.png";
import {confirmPatient} from "../../utils/validations";
import {dateTimeFormat} from "../../utils/utils";

const patientTemp = {
  visit_reason: "odontologia",
  sex: "female",
  created_by: "local",
  address: "san cristobal",
  modified_by: "local",
  email: "-",
  uid: "4cf72885-fe45",
  active: true,
  clinic_location: "amatitlan",
  last_name: "ramirez jimenez",
  contact_uid: "4cf72885-fe45",
  first_name: "consuelo",
  phone_number: "55108273",
  created_timestamp: "2020-04-18 17:21:25.340325-06:00",
  modified_timestamp: "2020-04-18 17:21:25.340325-06:00",
  birthday: "1955-11-09"
}

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  const [patient, setPatient] = useState(patientTemp);

  useEffect(() => {
    console.log("Fetching patient by id...");
    const prettyPatient = confirmPatient(patient);
    setPatient(prettyPatient);
    // axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + uid)
    //   .then( (res) => {
    //     console.log("Contact fetched from API");
    //     setPatient(confirmPatient(res.data.payload));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }, []);

  return (
    <div className={"page-container"}>
      {patient !== {} &&
      <>
        <GeneralInfo patient={patient}/>
        <ContactInfo patient={patient}/>
      </>
      }
    </div>
  );
}


const GeneralInfo = (props) => {
  const {patient} = props;

  return (
    <Paper className={"mid-paper"} elevation={2}>
      <div className={"mid-paper-container"}>
        <div style={{padding: "15px 0"}}>
          <img style={{objectFit: "cover", width: "200px", height: "280px", }}
               src={placeholder} alt={"profile"}/>
        </div>
        <div>
          <h3><b>Información Personal</b></h3>
          <p><b>Nombres y Apellidos</b></p>
          <p>{patient.first_name + " " + patient.last_name}</p>
          <p><b>Clínica</b></p>
          <p>{patient.clinic_location}</p>
          <p><b>Fecha de Nacimiento</b></p>
          <p>{patient.birthday}</p>
          <p><b>Sexo</b></p>
          <p>{patient.sex}</p>
          <p><b>Motivo de Visita</b></p>
          <p>{patient.visit_reason}</p>
        </div>
      </div>
    </Paper>
  )
}

const ContactInfo = (props) => {
  const {patient} = props;



  return (
    <Paper className={"mid-paper"}
           style={{display: "flex", flexDirection: "column",justifyContent: "space-between"}} elevation={2}>
      <div className={"mid-paper-container"}>
        <div style={{width: "200px"}}>
        <h3><b>Estado</b></h3>
        <p><b>Número Telefónico</b></p>
        <p>{patient.phone_number}</p>
        <p><b>Correo Electrónico</b></p>
        <p>{patient.email}</p>
        <p><b>Dirección</b></p>
        <p>{patient.address}</p>
        </div>
        <div style={{width: "200px"}}>
          <button className="mid-paper-button">Contactar</button>
          <button className="mid-paper-button">Editar</button>
          <button className="mid-paper-button">Eliminar</button>
        </div>
      </div>

      <div className={"mid-paper-container"}>
        <div style={{width: "100%", padding: "15px 15px", textAlign: "right"}}>
          <small><i>Última modificación: {dateTimeFormat(patient.modified_timestamp)}</i></small>
        </div>
      </div>
    </Paper>
  )
}


export {PatientDetail};