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
};

const dateTimeFormat = (isoDate) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  let date = new Date(isoDate);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - " +
    ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
};

const dateFormat = (isoDate) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  let date = new Date(isoDate);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};

const birthdayFormat = (isoDate) => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  let date = new Date(isoDate);
  return date.getUTCDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};

const capitalize = (word) => {
  return word.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
};

const getTodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  today = yyyy + mm + dd + "T200000Z/" + yyyy + mm + dd + "T203000Z";
  return today
};

export {dateTimeFormat, dateFormat, birthdayFormat, capitalize, patientTemplate, getTodayDate};