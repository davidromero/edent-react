import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper/index";
import { Link } from "react-router-dom"
import axios from 'axios/index';
import {dateFormat, capitalize} from '../../utils'
import "../styles/PagesStyle.css";


const ContactList = () => {
  const [contactList, setContactList] =  useState([]);

  useEffect(() => {
    console.log("Fetching contacts...");
    axios.get("https://9jtkflgqhe.execute-api.us-east-1.amazonaws.com/api/contacts/")
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
                <p>
                  <b style={{textTransform: "capitalize", fontSize: "1.1em"}}>{contact.first_name + " " + contact.last_name}</b><br/><br/>
                  Teléfono: {contact.phone_number}<br/>
                  Clínica: {capitalize(contact.clinic_location)}<br/>
                </p>
                <small><i>Última modificación: {dateFormat(contact.modified_timestamp)}</i></small>
              </Paper>
            </Link>
          )
        })
      }
    </div>
  )
};




export {ContactList};