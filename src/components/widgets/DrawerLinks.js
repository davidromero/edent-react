import React from "react";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Dashboard, People, Contacts, Create, Payment, Schedule, AttachMoney} from "@material-ui/icons";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {Link} from "react-router-dom";

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <Dashboard/>
      </ListItemIcon>
      <ListItemText primary="Inicio"/>
    </ListItem>
    <ListItem button component={Link} to="/appointments">
      <ListItemIcon>
        <Schedule/>
      </ListItemIcon>
      <ListItemText primary="Citas"/>
    </ListItem>
    <ListItem button component={Link} to="/patients">
      <ListItemIcon>
        <People/>
      </ListItemIcon>
      <ListItemText primary="Pacientes"/>
    </ListItem>
    <ListItem button component={Link} to="/contacts">
      <ListItemIcon>
        <Contacts/>
      </ListItemIcon>
      <ListItemText primary="Contactos"/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button component={Link} to="/createpatient">
      <ListItemIcon>
        <Create/>
      </ListItemIcon>
      <ListItemText primary="Nuevo Paciente"/>
    </ListItem>
    <ListItem button component={Link} to="/checkout">
      <ListItemIcon>
        <Payment/>
      </ListItemIcon>
      <ListItemText primary="Pago"/>
    </ListItem>
    <ListItem button component={Link} to="/budgetlist">
      <ListItemIcon>
        <AttachMoney/>
      </ListItemIcon>
      <ListItemText primary="Presupuesto"/>
    </ListItem>
    <ListItem button component="a" href="http://www.google.com/calendar/" target={"_blank"}>
      <ListItemIcon>
        <CalendarTodayIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendario"/>
    </ListItem>
  </div>
);