import React from "react";
import {RadioGroup, Radio, FormControlLabel, TextField, Button, FormHelperText,
  Select, Input, MenuItem, FormControl, InputLabel} from "@material-ui/core";
import "../styles/PagesStyle.css"

const GeneralForm = (props) => {
  const {patient, handleChange, nextStep} = props;

  return (
    <div>
      <div className={"formContainer"}>
        <TextField style={{margin: "8px", width: "180px"}} label="Nombres" type="text" name={"first_name"}
                   required onChange={handleChange} value={patient.first_name}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Apellidos" type="text" name={"last_name"}
                   required onChange={handleChange} value={patient.last_name}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Fecha de Nacimiento" name={"birthday"}
                   defaultValue="2000-12-31" type="date" required onChange={handleChange} value={patient.birthday}/>
        <FormControl style={{margin: "8px", width: "180px"}} >
          <InputLabel id="location">Clínica *</InputLabel>
          <Select labelId={"location-label"} className={"selectEmpty"} value={patient.location ? patient.location : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"Chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"Jocotán"}>Jocotán</MenuItem>
            <MenuItem value={"Amatitlán"}>Amatitlán</MenuItem>
            <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
          </Select>
        </FormControl>

        <RadioGroup style={{display: "inline-block", marginTop: "8px"}} onChange={handleChange} name="sex" value={patient.sex}>
          <FormHelperText style={{margin: "0"}}>Sexo *</FormHelperText>
          <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
          <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
        </RadioGroup>
        <TextField style={{margin: "8px", width: "180px"}} name="phone_number"
                   label="Número Telefónico" type="number" onChange={handleChange} value={patient.phone_number}/>
        <TextField style={{margin: "8px", width: "180px"}} name="email"
                   label="Correo Electrónico" type="email" onChange={handleChange} value={patient.email}/>
        <TextField style={{margin: "8px", width: "180px"}} name="address"
                   label="Dirección" type="text" onChange={handleChange} value={patient.address}/>
        <TextField style={{margin: "8px", width: "180px"}} name="visit_reason"
                   label="Motivo de Visita" type="text" multiline={true} onChange={handleChange} value={patient.visit_reason}/>
      </div>

      <Button className={"button"} onClick={nextStep} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  )
};


export {GeneralForm};