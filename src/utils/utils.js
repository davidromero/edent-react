
const patientTemplate = {
  "first_name": "",
  "last_name": "",
  "clinic_location": "",
  "birthday": "2000-12-31",
  "sex": "",
  "visit_reason": "",
  "address": "",
  "email": "",
  "phone_number": ""
}

const dateTimeFormat = (iso_date) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  let date = new Date(iso_date);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - " +
    ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) +":" + ("0" + date.getSeconds()).slice(-2);
}

const dateFormat = (iso_date) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  let date = new Date(iso_date);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
}

const birthdayFormat = (iso_date) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  let date = new Date(iso_date);
  return date.getUTCDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
}

const capitalize = (word) => {
  return word.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export {dateTimeFormat, dateFormat, birthdayFormat, capitalize, patientTemplate}