import React from "react";
import {RadioGroup, Radio, FormControlLabel, TextField, Button, FormLabel,
  Select, Input, MenuItem, FormControl, InputLabel} from "@material-ui/core";
import "../styles/PagesStyle.css"

const GeneralForm = (props) => {
  const {patient, handleChange, nextStep} = props;

  return (
    <div>
      <div className={"form-container"}>
        <TextField style={{margin: "8px", width: "180px"}} label="Nombres" type="text" name={"first_name"}
                   required onChange={handleChange} value={patient.first_name || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Apellidos" type="text" name={"last_name"}
                   required onChange={handleChange} value={patient.last_name || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Fecha de Nacimiento" name={"birthday"}
                   type="date" required onChange={handleChange} value={patient.birthday || "2000-12-31"}/>
        <FormControl style={{margin: "8px", width: "180px"}} >
          <InputLabel id="location">Clínica *</InputLabel>
          <Select className={"selectEmpty"} name={"clinic_location"} value={patient.clinic_location ? patient.clinic_location : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"jocotan"}>Jocotán</MenuItem>
            <MenuItem value={"amatitlan"}>Amatitlán</MenuItem>
            <MenuItem value={"guatemala"}>Guatemala</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{margin: "8px"}} >
          <FormLabel style={{fontSize: "0.8em", padding: "0"}}>Sexo *</FormLabel>
          <RadioGroup style={{display: "inline-block"}} onChange={handleChange} name="sex" value={patient.sex}>
            <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
            <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
          </RadioGroup>
        </FormControl>
        <FormControl style={{margin: "8px", width: "180px"}} >
          <InputLabel id="location">Motivo de visita *</InputLabel>
          <Select className={"selectEmpty"} name={"visit_reason"} value={patient.visit_reason ? patient.visit_reason : ""}
                  onChange={handleChange} input={<Input name={"visit_reason"}/>}>
            <MenuItem value={"odontologia"}>Odontología</MenuItem>
            <MenuItem value={"ortodoncia"}>Ortodoncia</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button className={"button"} onClick={nextStep} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  )
};


const ContactForm = (props) => {
  const {patient, handleChange, nextStep, prevStep} = props;

  return (
    <div>
      <div className={"form-container"}>
        <TextField style={{margin: "8px", width: "180px"}} name="phone_number" required
                   label="Número Telefónico" type="number" onChange={handleChange} value={patient.phone_number || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} name="email"
                   label="Correo Electrónico" type="email" onChange={handleChange} value={patient.email || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} name="address"
                   label="Dirección" type="text" onChange={handleChange} value={patient.address || ""}/>
      </div>
      <Button className={"button"}  style={{marginRight: "20px"}} onClick={prevStep}>
        Atrás
      </Button>
      <Button className={"button"} onClick={nextStep} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  )
};


export {GeneralForm, ContactForm};