import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import "../styles/PagesStyle.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {appointmentFormat, validateNameAppointment, validateDescriptAppointment,
  getUidPatientfromDescriptionAppointment, isAppointmentDue, sortByDate} from "../../utils/utils";
import {ConfirmationModal} from "../widgets/Modals";


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
        <h3>Citas de Hoy</h3>
      </Paper>
      {appointmentList.length === 0 ? <h2>No hay citas pendientes</h2> : <></>}
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
  const {appointment} = props;
  const [correctFormat, setCorrectFormat] = useState(false);

  useEffect(() => {
    const correct = validateNameAppointment(appointment.title) && validateDescriptAppointment(appointment.description);
    setCorrectFormat(correct);
  }, [appointment.title, appointment.description]);

  return (
    <Paper className={"simple-paper"}>
      <h3 style={isAppointmentDue(appointment.end) ? {color: "red"} : {color: "black"}}>
        {appointmentFormat(appointment.start, appointment.end)}<br/>
      </h3>
      <h2>{appointment.title}</h2><br/>
      <p>
        {appointment.description}<br/>
        <AttendAppointment correctFormat={correctFormat} description={appointment.description}  uid={appointment.uid}/>
        <RescheduleButton uid={appointment.uid}/>
      </p>
    </Paper>
  );
};

const AttendAppointment = (props) => {
  let history = useHistory();
  const {correctFormat, description, uid} = props;
  const [isOpen, setIsOpen] = useState(false);

  const startTreatment = () => {
    markAttended(false);
    history.push('/patients/'+getUidPatientfromDescriptionAppointment(description));
  }

  const markAttended = (refresh) => {
    axios.put("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/appointments/" + uid)
      .then((res) => {
        if (refresh) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <>
      <ConfirmationModal isOpen={isOpen} closeModal={() => {setIsOpen(false);}}
                         acceptAction={correctFormat ? startTreatment : () => {markAttended(true)}}
                         title={"¿Desea iniciar el tratamiento del paciente?"} subtitle={""}
      />
      <button className={'mid-paper-button'} style={{margin: "4px"}}
              onClick={() => {setIsOpen(true)}}>
        {correctFormat ? "Empezar tratamiento" : "Marcar como atendido"}</button>
    </>
  )
}


const RescheduleButton = (props) => {
  const {uid} = props;
  const [isOpen, setIsOpen] = useState(false);

  const updateAppointment = () => {
    axios.delete("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/appointments/" + uid)
      .then((res) => {
        setIsOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      })
  };

  return (
    <>
      <ConfirmationModal isOpen={isOpen} closeModal={() => {setIsOpen(false);}} acceptAction={updateAppointment}
                         title={"¿Está seguro en reagendar la cita?"} subtitle={"La cita actual se eliminará"}/>
      <button className={'mid-paper-button'} style={{margin: "4px"}}
              onClick={() => {setIsOpen(true)}}>Reagendar cita</button>
    </>
  )
}

export {AppointmentList};