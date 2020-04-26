import React, {useState, useEffect} from "react";
import {RadioGroup, Radio, FormControlLabel, TextField, Button, FormLabel,
  Select, Input, MenuItem, FormControl, InputLabel, Paper, ListItemText} from "@material-ui/core";
import {validateContactsForm, validateGeneralForm, confirmPatient} from "../../utils/validations";
import "../styles/PagesStyle.css"


const GeneralForm = (props) => {
  const {patient, handleChange, nextStep} = props;
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errorMessage = validateGeneralForm(patient);
    if (errorMessage === ""){
      setErrorMessage("");
      nextStep();
    }
    else{
      console.log(errorMessage)
      setErrorMessage(errorMessage);
    }
  }

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
      {errorMessage === "" ? <div/> : <ValidationError message={errorMessage}/>}

      <Button className={"button"} onClick={validate} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  )
};


const ContactForm = (props) => {
  const {patient, handleChange, nextStep, prevStep} = props;
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errorMessage = validateContactsForm(patient);
    if (errorMessage === ""){
      setErrorMessage("");
      nextStep();
    }
    else{
      console.log(errorMessage)
      setErrorMessage(errorMessage);
    }
  }

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
      {errorMessage === "" ? <div/> : <ValidationError message={errorMessage}/>}

      <Button className={"button"} style={{marginRight: "20px"}} onClick={prevStep}>
        Atrás
      </Button>
      <Button className={"button"} onClick={validate} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  )
};


const Confirmation = (props) => {
  const {patient, nextStep, prevStep} = props;
  const [confirmation, setConfirmation] = useState(patient);

  useEffect(() => {
    const prettyPatient = confirmPatient(patient);
    setConfirmation(prettyPatient);
  });

  return (
    <div>
      <div className={"form-container"}>
        <Paper className={"simple-paper"}>
          <h3><b>Información Personal</b></h3>
          <p><b>Nombres y Apellidos</b></p>
          <p>{confirmation.first_name + " " + confirmation.last_name}</p>
          <p><b>Clínica</b></p>
          <p>{confirmation.clinic_location}</p>
          <p><b>Fecha de Nacimiento</b></p>
          <p>{confirmation.birthday}</p>
          <p><b>Sexo</b></p>
          <p>{confirmation.sex}</p>
          <p><b>Motivo de Visita</b></p>
          <p>{confirmation.visit_reason}</p>
        </Paper>
        <Paper className={"simple-paper"}>
          <h3><b>Contacto Personal</b></h3>
          <p><b>Número Telefónico</b></p>
          <p>{confirmation.phone_number}</p>
          <p><b>Correo Electrónico</b></p>
          <p>{confirmation.email}</p>
          <p><b>Dirección</b></p>
          <p>{confirmation.address}</p>
        </Paper>
      </div>

      <Button className={"button"} style={{marginRight: "20px", marginTop: "20px"}} onClick={prevStep}>
        Atrás
      </Button>
      <Button className={"button"} style={{marginTop: "20px"}} onClick={nextStep} variant="contained" color="primary">
        Confirmar y Guardar
      </Button>
    </div>
  )
}

const ValidationError = (props) => {
  const {message} = props;

  return (
    <div style={{textAlign: "center", margin: "8px"}}>
      <b>{message}</b>
    </div>
  );

}

export {GeneralForm, ContactForm, Confirmation};