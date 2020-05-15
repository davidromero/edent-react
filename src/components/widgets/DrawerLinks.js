import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Dashboard, People, Today, Contacts, Create, Payment} from "@material-ui/icons";
import {Link} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button component={Link} to="/calendar">
      <ListItemIcon>
        <Today />
      </ListItemIcon>
      <ListItemText primary="Calendario" />
    </ListItem>
    <ListItem button component={Link} to="/patients">
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItem>
    <ListItem button component={Link} to="/contacts">
      <ListItemIcon>
        <Contacts />
      </ListItemIcon>
      <ListItemText primary="Contactos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={Link} to="/createpatient">
      <ListItemIcon>
        <Create />
      </ListItemIcon>
      <ListItemText primary="Nuevo Paciente"/>
    </ListItem>
    <ListItem button component={Link} to="/checkout">
      <ListItemIcon>
        <Payment />
      </ListItemIcon>
      <ListItemText primary="Pago" />
    </ListItem>
  </div>
);