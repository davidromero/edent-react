import React, {useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper/index";
import { Link } from "react-router-dom"
import axios from 'axios/index';
import {dateTimeFormat, capitalize} from '../../utils/utils'
import "../styles/PagesStyle.css";


const TreatmentList = () => {

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Tratamientos</h2>
        <h3>Lista de Tratamientos</h3>
      </Paper>
      {

      }
    </div>
  )
};


export {TreatmentList};