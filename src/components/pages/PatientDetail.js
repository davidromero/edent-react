import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
import placeholder from "../../assets/img/profile_placeholder.png";
import {ContactInfo} from "./ContactDetail";
import {confirmPatient} from "../../utils/validations";
import Modal from 'react-modal';
import {dateTimeFormat} from "../../utils/utils";

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  const [patient, setPatient] = useState({});

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
      {patient &&
      <>
        <GeneralInfo patient={patient}/>
        <ContactInfo patient={patient}>
          <PatientButtons patient={patient}/>
        </ContactInfo>
        <ServiceDetail>
          <ServiceButtons patient={patient}/>
        </ServiceDetail>
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


const ServiceDetail = (props) => {
  const {patient} = props;

  return (
    <Paper className={"mid-paper"} style={{display: "flex", flexDirection: "column",justifyContent: "space-between"}} elevation={2}>
      <h2 style={{textTransform: "capitalize", margin: "15px"}}><b>Odontología Operatoria</b></h2>
      <div className={"mid-paper-container"}>
        <div style={{width: "200px"}}>
          <p><b>Siguiente cita: </b>20 May 2020</p>
          <p><b>Última cita: </b>20 May 2019</p>
          <p><b>Último tratamiento: </b>Prótesis Valpast Total</p>
        </div>
        {props.children}
      </div>

      <div className={"mid-paper-container"}>
        <div style={{width: "100%", padding: "15px 15px", textAlign: "right"}}>
          <small><i>Fecha de ingreso:  26 Abr 2020 </i></small>
        </div>
      </div>
    </Paper>
  )
};


const ServiceButtons = (props) => {
  const {patient} = props;

  return(
    <div style={{width: "200px"}}>
      <StartTreatmentButton uid={patient.patient_uid}/>
      <AppointmentButton uid={patient.patient_uid}/>
      <AppointmentHistoryButton uid={patient.patient_uid}/>
    </div>
  )
};

const StartTreatmentButton = (props) => {
  const {uid} = props;

  return(
    <Link to={"../treatment/" + uid} style={{ textDecoration: 'none', color: 'inherit'}} replace>
      <button className="mid-paper-button">Iniciar nuevo tratamiento</button>
    </Link>
  )
};

const AppointmentButton = (props) => {
  const {uid} = props;

  return(
    <button className="mid-paper-button">Hacer cita</button>
  )
};

const AppointmentHistoryButton = (props) => {
  const {uid} = props;

  return(
    <Link to={"../history/" + uid} style={{ textDecoration: 'none', color: 'inherit'}} replace>
      <button className="mid-paper-button">Ver historial de citas</button>
    </Link>
  )
};



export {PatientDetail};