import React, {useState, useEffect} from "react";
import {
  RadioGroup, Radio, FormControlLabel, TextField, Button, FormLabel,
  Select, Input, MenuItem, FormControl, InputLabel, Paper, Checkbox, ListItemText
} from "@material-ui/core";
import {validateContactsForm, validateGeneralForm, confirmPatient} from "../../utils/validations";
import "../styles/PagesStyle.css";
import {doctor_names} from "../../utils/utils";

const GeneralForm = (props) => {
  const {patient, handleChange, nextStep} = props;
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errorMessage = validateGeneralForm(patient);
    if (errorMessage === "") {
      setErrorMessage("");
      nextStep();
    } else {
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <div className={"form-container"}>
        <TextField style={{margin: "8px", width: "180px"}} label="Nombres" type="text" name={"first_name"}
                   onChange={handleChange} value={patient.first_name || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Apellidos" type="text" name={"last_name"}
                   onChange={handleChange} value={patient.last_name || ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Fecha de Nacimiento" name={"birthday"}
                   type="date" onChange={handleChange} value={patient.birthday || "2000-12-31"}/>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="location">Clínica</InputLabel>
          <Select className={"selectEmpty"} name={"clinic_location"}
                  value={patient.clinic_location ? patient.clinic_location : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"jocotan"}>Jocotán</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={"multi-container"} style={{margin: "8px", width: "180px"}}>
          <InputLabel id="doctors">Doctores</InputLabel>
          <Select className={"selectEmpty"} name={"doctor_names"} multiple
                  value={patient.doctor_names ? patient.doctor_names : ""}
                  onChange={handleChange}
                  input={<Input/>}
                  renderValue={(selected) => selected.join(', ')}>
            {doctor_names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={patient.doctor_names.indexOf(name) > -1}/>
                <ListItemText primary={name}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{margin: "8px"}}>
          <FormLabel style={{fontSize: "0.8em", padding: "0"}}>Sexo *</FormLabel>
          <RadioGroup style={{display: "inline-block"}} onChange={handleChange} name="sex" value={patient.sex}>
            <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
            <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
          </RadioGroup>
        </FormControl>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="location">Motivo de visita *</InputLabel>
          <Select className={"selectEmpty"} name={"visit_reason"}
                  value={patient.visit_reason ? patient.visit_reason : ""}
                  onChange={handleChange} input={<Input name={"visit_reason"}/>}>
            <MenuItem value={"operatoria"}>Odontología Operatoria</MenuItem>
            <MenuItem value={"ortodoncia"}>Ortodoncia</MenuItem>
            <MenuItem value={"endodoncia"}>Endodoncia</MenuItem>
            <MenuItem value={"cirugia"}>Cirugía</MenuItem>
            <MenuItem value={"seguro"}>Seguro</MenuItem>
          </Select>
        </FormControl>
      </div>
      {errorMessage === "" ? <div/> : <ValidationError message={errorMessage}/>}

      <Button className={"button"} onClick={validate} variant="contained" color="primary">
        Siguiente
      </Button>
    </div>
  );
};


const ContactForm = (props) => {
  const {patient, handleChange, nextStep, prevStep} = props;
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errorMessage = validateContactsForm(patient);
    if (errorMessage === "") {
      setErrorMessage("");
      nextStep();
    } else {
      setErrorMessage(errorMessage);
    }
  };

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
  );
};


const Confirmation = (props) => {
  const {patient, nextStep, prevStep} = props;
  const [confirmation, setConfirmation] = useState(patient);

  useEffect(() => {
    const prettyPatient = confirmPatient(patient);
    setConfirmation(prettyPatient);
  }, [patient]);

  return (
    <div>
      <div className={"form-container"}>
        <Paper style={{width: "100%", maxWidth: "280px"}} className={"simple-paper"}>
          <h3><b>Información Personal</b></h3>
          <p><b>Nombres y Apellidos</b><br/>
            {confirmation.first_name + " " + confirmation.last_name}</p>
          <p><b>Clínica</b><br/>
            {confirmation.clinic_location}</p>
          <p><b>Fecha de Nacimiento</b><br/>
            {confirmation.birthday}</p>
          <p><b>Sexo</b><br/>
            {confirmation.sex}</p>
          <p><b>Motivo de Visita</b><br/>
            {confirmation.visit_reason}</p>
        </Paper>
        <Paper style={{width: "100%", maxWidth: "280px"}} className={"simple-paper"}>
          <h3><b>Contacto Personal</b></h3>
          <p><b>Número Telefónico</b><br/>
            {confirmation.phone_number}</p>
          <p><b>Correo Electrónico</b><br/>
            {confirmation.email}</p>
          <p><b>Dirección</b><br/>
            {confirmation.address}</p>
          <p><b>Doctor(es)</b><br/>
            {confirmation.doctor_names}</p>
        </Paper>
      </div>

      <Button className={"button"} style={{marginRight: "20px", marginTop: "20px"}} onClick={prevStep}>
        Atrás
      </Button>
      <Button className={"button"} style={{marginTop: "20px"}} onClick={nextStep} variant="contained" color="primary">
        Confirmar y Guardar
      </Button>
    </div>
  );
};

const ValidationError = (props) => {
  const {message} = props;

  return (
    <div style={{textAlign: "center", margin: "8px"}}>
      <b>{message}</b>
    </div>
  );
};

const EditForm = (props) => {
  const {confirmation, handleChange} = props;

  return (
    <div>
      <div style={{minWidth: "180px"}}>
        <TextField style={{margin: "8px", width: "180px"}} label="Nombres" type="text" name={"first_name"}
                   onChange={handleChange} value={confirmation ? confirmation.first_name : ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Apellidos" type="text" name={"last_name"}
                   onChange={handleChange} value={confirmation ? confirmation.last_name : ""}/>
        <TextField style={{margin: "8px", width: "180px"}} label="Fecha de Nacimiento" name={"birthday"}
                   type="date" onChange={handleChange} value={confirmation ? confirmation.birthday : "2000-12-31"}/>
      </div>
      <div style={{minWidth: "180px"}}>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="location">Clínica</InputLabel>
          <Select className={"selectEmpty"} name={"clinic_location"}
                  value={confirmation ? confirmation.clinic_location : ""}
                  onChange={handleChange} input={<Input name={"location"}/>}>
            <MenuItem value={"chiquimula"}>Chiquimula</MenuItem>
            <MenuItem value={"jocotan"}>Jocotán</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{margin: "8px"}}>
          <FormLabel style={{fontSize: "0.8em", padding: "0"}}>Sexo *</FormLabel>
          <RadioGroup style={{display: "inline-block"}} onChange={handleChange}
                      name="sex" value={confirmation ? confirmation.sex : ""}>
            <FormControlLabel value="male" control={<Radio/>} label="Hombre"/>
            <FormControlLabel value="female" control={<Radio/>} label="Mujer"/>
          </RadioGroup>
        </FormControl>
        <FormControl style={{margin: "8px", width: "180px"}}>
          <InputLabel id="location">Motivo de visita *</InputLabel>
          <Select className={"selectEmpty"} name={"visit_reason"}
                  value={confirmation ? confirmation.visit_reason : ""}
                  onChange={handleChange} input={<Input name={"visit_reason"}/>}>
            <MenuItem value={"operatoria"}>Odontología Operatoria</MenuItem>
            <MenuItem value={"ortodoncia"}>Ortodoncia</MenuItem>
            <MenuItem value={"endodoncia"}>Endodoncia</MenuItem>
            <MenuItem value={"cirugia"}>Cirugía</MenuItem>
            <MenuItem value={"seguro"}>Seguro</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{minWidth: "180px"}}>
        <TextField style={{margin: "8px", width: "180px"}} name="phone_number" required
                   label="Número Telefónico" type="number" onChange={handleChange}
                   value={confirmation ? confirmation.phone_number : ""}/>
        <TextField style={{margin: "8px", width: "180px"}} name="email"
                   label="Correo Electrónico" type="email" onChange={handleChange}
                   value={confirmation ? confirmation.email : ""}/>
        <TextField style={{margin: "8px", width: "180px"}} name="address"
                   label="Dirección" type="text" onChange={handleChange}
                   value={confirmation ? confirmation.address : ""}/>
      </div>
    </div>
  );
};


export {GeneralForm, ContactForm, Confirmation, EditForm};