import React from "react";
import Paper from "@material-ui/core/Paper/index";
import { Link } from "react-router-dom"
import "../styles/PagesStyle.css";

const contactList = [
  {first_name: "Aldo", last_name: "Gatica", phone_number: "31264249", location: "Guatemala", modified_timestamp: "11 Abril 2020"},
  {first_name: "Aldo", last_name: "Gatica", phone_number: "31264249", location: "Guatemala", modified_timestamp: "11 Abril 2020"}
  ];

const ContactList = () => {

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
                  Clínica: {contact.location}
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