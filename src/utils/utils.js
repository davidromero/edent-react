
const patientTemplate = {
  "first_name": "aldo roberto",
  "last_name": "gatica ramirez",
  "clinic_location": "guatemala",
  "birthday": "2000-12-31",
  "sex": "male",
  "visit_reason": "ortodoncia",
  "address": "",
  "email": "",
  "phone_number": "12341234"
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

const capitalize = (word) => {
  return word.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

export {dateTimeFormat, dateFormat, capitalize, patientTemplate}