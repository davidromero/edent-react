import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {dateTimeFormat} from "../../utils/utils";
import {Link} from "react-router-dom";
import axios from "axios";

const ContactDetail = (props) => {
  const {uid} = props.match.params;
  const [contact, setContact] = useState();

  useEffect(() => {
    axios.get("https://9jtkflgqhe.execute-api.us-east-1.amazonaws.com/api/contacts/" + uid)
      .then( (res) => {
        setContact(res.data.payload);
      })
      .catch((error) => {
      })
  }, [uid]);

  return (
    <div className={"page-container"}>
      {!contact ? <h2>Cargando...</h2> :
      <>
        <ContactInfo patient={contact}>
          <ContactsButtons contact={contact}/>
        </ContactInfo>
      </>
      }
    </div>
  );
}

const ContactInfo = (props) => {
  const {patient} = props;

  return (
    <Paper className={"mid-paper"} style={{display: "flex", flexDirection: "column",justifyContent: "space-between"}} elevation={2}>
      {!patient.patient_uid ? <></> :
        <h2 style={{textTransform: "capitalize", margin: "15px"}}><b>{patient.first_name + " " + patient.last_name}</b></h2> }
      <div className={"mid-paper-container"}>
        <div style={{width: "200px"}}>
          <p><b>Número Telefónico</b><br/>
          {patient.phone_number}</p>
          <p><b>Correo Electrónico</b><br/>
          {patient.email}</p>
          <p><b>Dirección</b><br/>
          {patient.address}</p>
        </div>
        {props.children}
      </div>

      <div className={"mid-paper-container"}>
        <div style={{width: "100%", padding: "15px 15px", textAlign: "right"}}>
          <small><i>Última modificación: {dateTimeFormat(patient.modified_timestamp)}</i></small>
        </div>
      </div>
    </Paper>
  )
};

const ContactsButtons = (props) => {
  const {contact} = props;

  return(
    <div style={{width: "200px"}}>
      <PatientButton uid={contact.patient_uid}/>
      <CallButton phone_number={contact.phone_number}/>
      <WhatsappButton phone_number={contact.phone_number}/>
    </div>
  )
};

const WhatsappButton = (props) => {
  const {phone_number} = props;

  return(
    <a href={'https://api.whatsapp.com/send?phone=+502' + phone_number} target="_blank"
       rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit'}}>
      <button className="mid-paper-button">WhatsApp</button>
    </a>
  )
}

const PatientButton = (props) => {
  const {uid} = props;

  return(
    <Link to={"../patients/" + uid} style={{ textDecoration: 'none', color: 'inherit'}} replace>
      <button className="mid-paper-button">Ver paciente</button>
    </Link>
  )
};

const CallButton = (props) => {
  const {phone_number} = props;

  return (
    <a href={'tel:' + phone_number} style={{ textDecoration: 'none', color: 'inherit'}}>
    <button className="mid-paper-button">Llamar</button></a>
  )
};


export {ContactDetail, ContactInfo};