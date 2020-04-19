import React from "react";
import Paper from "@material-ui/core/Paper/index";
import "../styles/PagesStyle.css";

const Dashboard = (props) => {

  return (
    <div className={"page-container"}>
      <Paper className={"simple-paper"} elevation={2} square={false}>
        <h2>Siguiente Paciente</h2>
        <p>
          <b>Aldo Gatica</b><br/>
          Ortodoncia - 10:00 am
        </p>
      </Paper>

      <Paper className={"simple-paper"} elevation={2} square={false}>
        <h2>Pacientes en espera</h2>
        <h3>10</h3>
      </Paper>

      <Paper className={"simple-paper"} elevation={2} square={false}>
        <h2>Pacientes ingresados</h2>
        <h3>2</h3>
      </Paper>
    </div>
  )
};


export {Dashboard};