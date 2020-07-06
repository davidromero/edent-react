import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
import placeholder from "../../assets/img/profile_placeholder.png";
import {ContactInfo} from "./ContactDetail";
import {confirmPatient} from "../../utils/validations";
import {dateFormat} from "../../utils/utils";
import {ServiceDetail} from "../widgets/TreatmentCards";
import {DeleteModal} from "../widgets/Modals";

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  const [patient, setPatient] = useState();

  useEffect(() => {
    axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + uid)
      .then((res) => {
        setPatient(confirmPatient(res.data.payload));
      })
      .catch((error) => {
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
          <ServiceDetail serviceName={"Operatoria"} treatmentId={"operatoria"} patient={patient}/>
          <ServiceDetail serviceName={"Endodoncia"} treatmentId={"endodoncia"} patient={patient}/>
          <ServiceDetail serviceName={"Cirugía"} treatmentId={"cirugia"} patient={patient}/>
          <ServiceDetail serviceName={"Seguro"} treatmentId={"seguro"} patient={patient}/>
        </>
      }
    </div>
  );
};

const GeneralInfo = (props) => {
  const [image, setImage] = useState();
  const {patient} = props;

  const handleImage = e => {
    if (e.target.files[0] !== undefined){
      setImage(URL.createObjectURL(e.target.files[0]));
      axios.put('https://il2fc10cb6.execute-api.us-east-1.amazonaws.com/api/upload/' + patient.uid,
        e.target.files[0], {headers: {'Content-Type': 'image/jpeg'}})
        .then((response) => {
          console.log('Success')
        })
        .catch((error) => {
          console.log(error)
        });
    }
  }

  return (
    <Paper className={"mid-paper"} elevation={2}>
      <div className={"mid-paper-container"}>
        <div style={{padding: "15px 0"}}>
          <label htmlFor="upload-button">
            <img style={{objectFit: "cover", width: "200px", height: "280px"}}
                 src={image ? image : "https://s3.amazonaws.com/images.edent.backend/" + patient.uid} alt={"profile"}
                 onError={() => {setImage(placeholder)}}/>
            <input type="file" id="upload-button" onChange={handleImage}
                   style={{display: "none"}}/>
          </label>
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
  );
};

const PatientButtons = (props) => {
  const {patient} = props;

  return (
    <div style={{width: "200px"}}>
      <ContactButton uid={patient.contact_uid}/>
      <AppointmentButton patient={patient}/>
      {/*<button className="mid-paper-button">Editar Información</button>*/}
      <DeleteButton patient={patient}/>
    </div>
  );
};

const ContactButton = (props) => {
  const {uid} = props;

  return (
    <Link to={"../contacts/" + uid} style={{textDecoration: 'none', color: 'inherit'}}>
      <button className="mid-paper-button">Contactar</button>
    </Link>
  );
};

const AppointmentButton = (props) => {
  const {patient} = props;
  const title = patient.first_name + " " + patient.last_name
  const details = "Tel: " + patient.phone_number
  const URL = "http://www.google.com/calendar/event?action=TEMPLATE&text=" + encodeURI(title) +
    "&details=" + encodeURI(details)

  return (
    <a href={URL} target="_blank" rel="noopener noreferrer">
      <button className="mid-paper-button">
        Agendar cita
      </button>
    </a>
  );
};

const DeleteButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {patient} = props;
  const history = useHistory();

  const inactivatePatient = () => {
    axios.delete("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + patient.uid)
      .then((res) => {
      })
      .catch((error) => {
      })
    setIsOpen(false);
    history.goBack();
  }


  return (
    <>
      <DeleteModal isOpen={isOpen} closeModal={() => {
        setIsOpen(false)
      }} inactivatePatient={inactivatePatient}/>
      <button className="mid-paper-button" onClick={() => {
        setIsOpen(true)
      }}>Eliminar Paciente
      </button>
    </>
  );
};

export {PatientDetail};