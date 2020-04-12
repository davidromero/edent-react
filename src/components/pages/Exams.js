import React from "react";
import Paper from "@material-ui/core/Paper/index";
import "../styles/PagesStyle.css";


const Exams = () => {

  return (
    <div className={"pageContainer"}>
      <Paper className={"widePaper"} elevation={2} square={false}>
        <h2>Exámenes</h2>
        <h3>Lista de Exámenes</h3>
      </Paper>
    </div>
  )
};

export {Exams};