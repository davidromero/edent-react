import React from "react";
import Paper from "@material-ui/core/Paper/index";
import "../styles/PagesStyle.css";


const Patients = () => {

  return (
    <div className={"pageContainer"}>
      <Paper className={"widePaper"} elevation={2} square={false}>
        <h2>Pacientes</h2>
        <h3>Lista de Pacientes</h3>
      </Paper>
    </div>
  )
};

export {Patients}