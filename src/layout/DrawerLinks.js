import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import TodayIcon from '@material-ui/icons/Today';
import ContactsIcon from '@material-ui/icons/Contacts';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CreateIcon from '@material-ui/icons/Create';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TodayIcon />
      </ListItemIcon>
      <ListItemText primary="Hoy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Exámenes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Contactos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Nuevo Paciente" />
    </ListItem>
  </div>
);