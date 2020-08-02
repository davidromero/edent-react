import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import "../styles/PagesStyle.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {appointmentFormat, validateNameAppointment, validateDescriptAppointment,
  getUidPatientfromDescriptionAppointment, isAppointmentDue, sortByDate} from "../../utils/utils";


const AppointmentList = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    axios.get("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/appointments/")
      .then((res) => {
        setAppointmentList(sortByDate(res.data.payload));
      })
      .catch((error) => {
      })
  }, []);

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Citas Pendientes</h2>
        <h3>Lista de Citas</h3>
      </Paper>
      {appointmentList.length === 0 ? <h2>Cargando...</h2> : <></>}
      {
        appointmentList && appointmentList.map((appointment, index) => {
          return (
            <AppointmentItem key={index} index={index} appointment={appointment}/>
          );
        })
      }
    </div>
  );
};

const AppointmentItem = (props) => {

  let history = useHistory();
  const {appointment} = props;
  const attended = appointment.attended;
  const [correctFormat, setCorrectFormat] = useState(false);
  const linkToPatients = '/patients/'+getUidPatientfromDescriptionAppointment(appointment.description);

  async function inactivateAppointment(uid, linkto) {
    await axios.delete("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/appointments/" + uid)
      .then((res) => {
        if(res.status === 204){
          if(linkto === linkToPatients){
            history.push(linkto);
          }
          else{
            window.open(linkto);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      })
  };

  async function updateAppointment(uid, linkto){
    await axios.get("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/attendAppointment/" + uid)
    .then((res) => {
      if(res.status === 204){
        history.push(linkto);
    }
    })
    .catch((error) => {
      console.error(error);
    })
  };

  useEffect(() => {
    const correct = (validateNameAppointment(appointment.title) && validateDescriptAppointment(appointment.description));
    setCorrectFormat(correct);
  }, [appointment.title, appointment.description]);

  const treatmentAppointmentButton = <button className={'mid-paper-button'} 
  style={{margin: "4px"}} onClick={() => { updateAppointment(appointment.uid, linkToPatients)}}>Empezar tratamiento</button>;
  const attendedAppointmentButton = <button className={'mid-paper-button'} 
  style={{margin: "4px"}} onClick={() => { inactivateAppointment(appointment.uid, linkToPatients) }}>Marcar como Atendido</button>;

  return (
    <Paper className={"simple-paper"}>
      <h3 style={(attended) ? ({color: "green"}) : (isAppointmentDue(appointment.end)) ? ({color: "red"}) : ({color: "black"})}>{appointmentFormat(appointment.start, appointment.end)}<br/></h3>
      <h2>
        {appointment.title}<br/>
      </h2>
      <div>
      <p>
        {appointment.description}<br/><br/> 
          {correctFormat ? (treatmentAppointmentButton) : (attendedAppointmentButton)}   
          <button className={'mid-paper-button'} style={{margin: "4px"}} onClick={() => { inactivateAppointment(appointment.uid, appointment.link) }}>Abrir en calendario</button>
      </p>
      </div>
    </Paper>
  );
};


export {AppointmentList};