import React, {useState, useEffect} from "react";
import {RadioGroup, Radio, FormControlLabel, TextField, Button, FormLabel,
  Select, Input, MenuItem, FormControl, InputLabel, Paper} from "@material-ui/core";

const AppointmentForm = (props) => {
  const {patient, handleChange} = props;


  return(
    <div>
      <h3>{patient.first_name} {patient.last_name}</h3>
      <div className={"form-container"}>
        <FormControl style={{margin: "8px", width: "180px"}} >
          <InputLabel id="location">Clínica *</InputLabel>
          <Select className={"selectEmpty"} name={"clinic_location"} value={patient.clinic_location ? patient.clinic_location : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"jocotan"}>Jocotán</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}


export {AppointmentForm};