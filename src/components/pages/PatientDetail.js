import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
import placeholder from "../../assets/img/profile_placeholder.png";
import {ContactInfo} from "./ContactDetail";
import {confirmPatient} from "../../utils/validations";
import {dateFormat} from "../../utils/utils";
import {ServiceDetail} from "../widgets/TreatmentCards";
import {AppointmentModal, DeleteModal} from "../widgets/Modals";

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  const [patient, setPatient] = useState();

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + uid)
      .then( (res) => {
        setPatient(confirmPatient(res.data.payload));
      })
      .catch((error) => {
        console.log(error);
      })
  }, [uid]);


  return (
    <div className={"page-container"}>
      {!patient ? <h2>Cargando...</h2> :
      <>
        <GeneralInfo patient={patient}/>
        <ContactInfo patient={patient}>
          <PatientButtons patient={patient}/>
        </ContactInfo>
        <ServiceDetail service_name={"Operatoria"} treatment_id={"operatoria"} patient={patient}/>
        <ServiceDetail service_name={"Endodoncia"} treatment_id={"endodoncia"} patient={patient}/>
        <ServiceDetail service_name={"Cirugía"} treatment_id={"cirugia"} patient={patient}/>
        <ServiceDetail service_name={"Seguro"} treatment_id={"seguro"} patient={patient}/>
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
          <img style={{objectFit: "cover", width: "200px", height: "280px"}}
               src={placeholder} alt={"profile"}/>
          <div className={"mid-paper-container"}>
            <small><i>Fecha de ingreso: {dateFormat(patient.modified_timestamp)} </i></small>
          </div>
        </div>
        <div>
          <h3><b>Información Personal</b></h3>
          <p><b>Nombre del Paciente</b><br/>
          {patient.first_name + " " + patient.last_name}</p>
          <p><b>Clínica</b><br/>
          {patient.clinic_location}</p>
          <p><b>Fecha de Nacimiento</b><br/>
          {patient.birthday}</p>
          <p><b>Motivo de Visita</b><br/>
          {patient.visit_reason}</p>
        </div>
      </div>
    </Paper>
  )
}

const PatientButtons = (props) => {
  const {patient} = props;

  return(
    <div style={{width: "200px"}}>
      <ContactButton uid={patient.contact_uid}/>
      <AppointmentButton patient={patient}/>
      {/*<button className="mid-paper-button">Editar Información</button>*/}
      <DeleteButton patient={patient}/>
    </div>
  )
}

const ContactButton = (props) => {
  const {uid} = props;

  return (
    <Link to={"../contacts/" + uid} style={{ textDecoration: 'none', color: 'inherit'}}>
      <button className="mid-paper-button">Contactar</button>
    </Link>
  )
}

const AppointmentHistoryButton = (props) => {
  const {uid} = props;

  return(
    <Link to={"../history/" + uid} style={{ textDecoration: 'none', color: 'inherit'}} replace>
      <button className="mid-paper-button">Ver historial de citas</button>
    </Link>
  )
};

const AppointmentButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {patient} = props;

  const makeAppointment = () => {
    console.log("Making appointment");
    setIsOpen(false);
  }


  return (
    <>
      <AppointmentModal patient={patient} isOpen={isOpen} closeModal={() => { setIsOpen(false) }}
                        makeAppointment={makeAppointment}/>
      <button className="mid-paper-button" onClick={() => setIsOpen(true)}>Agendar cita</button>
    </>
  )
};

const DeleteButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {patient} = props;
  const history = useHistory();

  const inactivatePatient = () => {
    console.log("Delete " + patient.uid)
    axios.delete("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + patient.uid)
      .then( (res) => {
        console.log("Patient deleted. " + res.data);
      })
      .catch((error) => {
        console.log(error);
      })
    setIsOpen(false);
    history.goBack();
  }


  return(
    <>
      <DeleteModal isOpen={isOpen} closeModal={() => {setIsOpen(false)}} inactivatePatient={inactivatePatient}/>
      <button className="mid-paper-button" onClick={() => {setIsOpen(true)}}>Eliminar Paciente</button>
    </>
  )
}

export {PatientDetail};