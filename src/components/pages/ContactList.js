import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper/index";
import { Link } from "react-router-dom"
import axios from 'axios/index';
import "../styles/PagesStyle.css";


const ContactList = () => {
  const [contactList, setContactList] =  useState([]);

  useEffect(() => {
    console.log("Fetching contacts...");
    axios.get("http://localhost:8000/contacts/")
      .then( (res) => {
        console.log("Contacts fetched from API");
        setContactList(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={"pageContainer"}>
      <Paper className={"widePaper"} elevation={2} square={false}>
        <h2>Contactos</h2>
        <h3>Lista de Contactos</h3>
      </Paper>
      {
        contactList && contactList.map((contact, index) => {
          return (
            <Link to={"contact/" + contact.uid} key={index} style={{ textDecoration: 'none', color: 'inherit'}}>
              <Paper className={"simplePaper"}>
                <b>{contact.first_name + " " + contact.last_name}</b>
                <p>
                  Teléfono: {contact.phone_number}<br/>
                  Clínica: {contact.clinic_location}
                </p>
                <small>Última modificación: {contact.modified_timestamp}</small>
              </Paper>
            </Link>
          )
        })
      }
    </div>
  )
};

export {ContactList};