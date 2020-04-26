import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {dateTimeFormat} from "../../utils/utils";
import {confirmPatient} from "../../utils/validations";
import {Link} from "react-router-dom";
import axios from "axios";

const contactTemp = {
  first_name: "-",
  last_name: "",
  visit_reason: "-",
  sex: "-",
  address: "-",
  email: "-",
  uid: "-",
  clinic_location: "-",
  patient_uid: "-",
  phone_number: "-",
  active: true,
  created_by: "local",
  modified_by: "local",
  created_timestamp: "2020-04-18 17:21:25.340325-06:00",
  modified_timestamp: "2020-04-18 17:21:25.340325-06:00",
  birthday: "2000-1-1"
}



const ContactDetail = (props) => {
  const {uid} = props.match.params
  const [contact, setContact] = useState(contactTemp);

  useEffect(() => {
    const prettyContact = confirmPatient(contact);
    setContact(prettyContact);
    axios.get("https://9jtkflgqhe.execute-api.us-east-1.amazonaws.com/api/contacts/" + uid)
      .then( (res) => {
        console.log("Contact fetched from API");
        setContact(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={"page-container"}>
      {contact !== {} &&
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
    <a href={'https://api.whatsapp.com/send?phone=' + phone_number} style={{ textDecoration: 'none', color: 'inherit'}}>
      <button className="mid-paper-button">WhatsApp</button></a>
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