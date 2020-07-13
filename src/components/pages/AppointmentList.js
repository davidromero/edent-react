import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import "../styles/PagesStyle.css";
import axios from "axios";
import {appointmentFormat} from "../../utils/utils";


const AppointmentList = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    axios.get("https://5ticjo0pz9.execute-api.us-east-1.amazonaws.com/api/appointments/")
      .then((res) => {
        setAppointmentList(res.data.payload);
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
  const {appointment} = props;

  return (
    <Paper className={"simple-paper"}>
      <h3>{appointmentFormat(appointment.start, appointment.end)}<br/></h3>
      <p>
        <b style={{textTransform: "capitalize", fontSize: "1.1em"}}>
          {appointment.title}<br/>
        </b>
        {appointment.description}<br/><br/>
        <button onClick={() => {console.log('Click')}}>Atender</button>
      </p>
    </Paper>
  );
};

export {AppointmentList};