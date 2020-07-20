import {capitalize, birthdayFormat} from './utils';

const validateGeneralForm = (patient) => {
  const {first_name, last_name, clinic_location, sex, visit_reason} = patient;
  if (first_name.length < 3 || first_name.length > 99) {
    return "Los nombres solo pueden contener de 3 a 99 letras";
  }
  if (last_name.length < 3 || last_name.length > 99) {
    return "Los apellidos solo pueden contener de 3 a 99 letras";
  }
  if (clinic_location === "" || sex === "" || visit_reason === "") {
    return "Ningún campo debe estar en blanco"
  }
  return "";
};

const validateContactsForm = (patient) => {
  const {phone_number} = patient;
  if (phone_number.length !== 8) {
    return "El teléfono no está bien escrito";
  }
  return "";
};

const confirmPatient = (patient) => {
  const prettyPatient = Object.create(patient);
  prettyPatient.first_name = capitalize(prettyPatient.first_name);
  prettyPatient.last_name = capitalize(prettyPatient.last_name);
  prettyPatient.clinic_location = capitalize(prettyPatient.clinic_location);
  prettyPatient.visit_reason = capitalize(prettyPatient.visit_reason);
  prettyPatient.birthday = prettyPatient.birthday === "-" ? "-" : birthdayFormat(prettyPatient.birthday);
  prettyPatient.sex = prettyPatient.sex === "male" ? "Hombre" : "Mujer";
  prettyPatient.email = prettyPatient.email === "" ? "No tiene" : prettyPatient.email;
  prettyPatient.address = prettyPatient.address === "" ? "Sin dirección" : prettyPatient.address;
  return prettyPatient;
};

export {validateGeneralForm, validateContactsForm, confirmPatient};