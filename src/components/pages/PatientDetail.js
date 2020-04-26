import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
import placeholder from "../../assets/img/profile_placeholder.png";
import {ContactInfo} from "./ContactDetail";
import {confirmPatient} from "../../utils/validations";
import {dateTimeFormat} from "../../utils/utils";
import Modal from 'react-modal';

const patientTemp = {
  first_name: "-",
  last_name: "",
  visit_reason: "-",
  sex: "-",
  address: "-",
  email: "-",
  uid: "-",
  clinic_location: "-",
  contact_uid: "-",
  phone_number: "-",
  active: true,
  created_by: "local",
  modified_by: "local",
  created_timestamp: "2020-04-18 17:21:25.340325-06:00",
  modified_timestamp: "2020-04-18 17:21:25.340325-06:00",
  birthday: "2000-1-1"
}

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  const [patient, setPatient] = useState(patientTemp);

  useEffect(() => {
    const prettyPatient = confirmPatient(patient);
    setPatient(prettyPatient);
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + uid)
      .then( (res) => {
        console.log("Patient fetched from API");
        setPatient(confirmPatient(res.data.payload));
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={"page-container"}>
      {patient !== {} &&
      <>
        <GeneralInfo patient={patient}/>
        <ContactInfo patient={patient}>
          <PatientButtons patient={patient}/>
        </ContactInfo>
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


const PatientButtons = (props) => {
  const {patient} = props;

  return(
    <div style={{width: "200px"}}>
      <ContactButton uid={patient.contact_uid}/>
      <button className="mid-paper-button">Editar</button>
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

const DeleteButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {patient} = props;
  const history = useHistory();

  const inactivatePatient = () => {
    console.log("Delete " + patient.uid)
    axios.delete("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + patient.uid)
      .then( (res) => {
        console.log("Patient deleted");
      })
      .catch((error) => {
        console.log(error);
      })
    setIsOpen(false);
    history.goBack();
  }

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  return(
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="¿Estas seguro?">
        <h3>¿Está seguro en realizar esta acción?</h3>
        <div className={"modal-container"}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                  onClick={inactivatePatient}>Aceptar</button>
          <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                  onClick={() => {setIsOpen(false)}}>Cancelar</button>
        </div>
      </Modal>
      <button className="mid-paper-button" onClick={() => {setIsOpen(true)}}>Eliminar</button>
    </>
  )
}



export {PatientDetail};