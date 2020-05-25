import {Paper} from "@material-ui/core";
import React, {useState} from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";

const ServiceDetail = (props) => {
  const {patient, service_name, treatment_id} = props;

  return (
    <Paper className={"mid-paper"} style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}
           elevation={2}>
      <h2 style={{textTransform: "capitalize", margin: "15px"}}><b>{service_name}</b></h2>
      <div className={"mid-paper-container"}>
        <div style={{width: "200px"}}>
          <p><b>Siguiente cita: </b>20 May 2020</p>
          <p><b>Última cita: </b>20 May 2019</p>
          <p><b>Último tratamiento: </b>Prótesis Valpast Total</p>
        </div>
        <ServiceButtons patient={patient} treatment_id={treatment_id}/>
      </div>
    </Paper>
  )
};

const ServiceButtons = (props) => {
  const {patient, treatment_id} = props;

  return (
    <div style={{width: "200px"}}>
      <StartTreatmentButton uid={patient.uid} treatment_id={treatment_id} patient={patient}/>
      <AppointmentButton uid={patient.uid}/>
    </div>
  )
};


const StartTreatmentButton = (props) => {
  const {uid, treatment_id, patient} = props;
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Qué tipo de tratamiento se iniciará?">
        <h3>¿Está seguro en empezar un nuevo tratamiento?</h3>
        <div className={"modal-container"}>
          <Link to={{
            pathname: "/treatments/" + uid,
            PatientId: uid,
            TreatmentProp: treatment_id.toLowerCase(),
            Patient: patient
          }}>
            <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}>Aceptar</button>
          </Link>

          <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                  onClick={() => {
                    setIsOpen(false)
                  }}>Cancelar
          </button>
        </div>
      </Modal>
      <button className="mid-paper-button" onClick={() => {
        setIsOpen(true)
      }}>Iniciar tratamiento
      </button>
    </>
  )

};

const AppointmentButton = (props) => {
  const {uid} = props;

  return (
    <button className="mid-paper-button">Hacer cita</button>
  )
};


export {ServiceDetail}