const patientTemplate = {
  "first_name": "",
  "last_name": "",
  "clinic_location": "",
  "doctor_names": [],
  "birthday": "2000-12-31",
  "sex": "",
  "visit_reason": "",
  "address": "",
  "email": "",
  "phone_number": ""
};

const doctor_names = [
  'Dra. Hilda Peralta',
  'Dra. Rocio Peralta',
  'dr. @guatemala',
  'dr. @amatitlan',
];

const ignoredAttributes = ["modified_by", "uid", "modified_timestamp", "created_by", "created_timestamp", "active",
  "contact_uid"]

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

const dateTimeFormat = (isoDate) => {
  let date = new Date(isoDate);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - " +
    ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
};

const appointmentFormat = (isoStart, isoEnd) => {
  let startDate = new Date(isoStart);
  let endDate = new Date(isoEnd);
  return startDate.getDate() + " " + months[startDate.getMonth()] + " " + startDate.getFullYear() + ", " +
    ("0" + startDate.getHours()).slice(-2) + ":" + ("0" + startDate.getMinutes()).slice(-2) + " - " +
    ("0" + endDate.getHours()).slice(-2) + ":" + ("0" + endDate.getMinutes()).slice(-2);
};

const dateFormat = (isoDate) => {
  let date = new Date(isoDate);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};

const birthdayFormat = (isoDate) => {
  let date = new Date(isoDate);
  date.setHours(date.getHours() + 6);
  return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
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
  return today;
};

const convertISO = (date) => {
  let formatDate = new Date(date);
  const hh = String(formatDate.getHours()).padStart(2, '0');
  const minmin = String(formatDate.getMinutes()).padStart(2, '0');
  const dd = String(formatDate.getDate()).padStart(2, '0');
  const mm = String(formatDate.getMonth() + 1).padStart(2, '0');
  const yyyy = formatDate.getFullYear();
  formatDate = yyyy + mm + dd + hh + minmin;
  return formatDate;
};

const validateNameAppointment = (name) => {
  let letters = /^[A-Za-z\s]+$/;
  return String(name).match(letters);
};

const validateDescriptAppointment = (description) => {
  let itemsList = description.split(/\r?\n/);
  return (description.split(/\r?\n/).length > 1 && itemsList[0].length > 1 && itemsList[1].length > 1 &&
    itemsList[0].match(/\S+/g).length > 1 && itemsList[1].match(/\S+/g).length > 1) ?
    (itemsList[0].match(/\S+/g).includes('ID:') &&
      itemsList[1].match(/\S+/g).includes("Tel:") &&
      validatePhoneNumber(itemsList[1].match(/\S+/g)[1]))
    :
    false;
};

const validatePhoneNumber = (number) => {
  return (number.toString().length === 8);
}

const getUidPatientfromDescriptionAppointment = (description) => {
  let itemsList = description.split(/\r?\n/);
  return validateDescriptAppointment(description) ? itemsList[0].match(/\S+/g)[1] : "";
}

const isAppointmentDue = (date) => {
  return (convertISO(new Date()) > convertISO(date));
}

const reduceAttributes = (original) => {
  var clone = Object.assign({}, original);
  ignoredAttributes.forEach(
    element => delete clone[element]
  );
  return clone;
}

const filterPatientList = (array, search, filter) => {
  let filteredArray = array;
  if (filter.doctor !== "") {
    filteredArray = filterByAttribute(filteredArray, "doctor_names", filter.doctor);
  }
  if (filter.clinic !== "") {
    filteredArray = filterByAttribute(filteredArray, "clinic_location", filter.clinic)
  }
  if (search !== "") {
    filteredArray = searchByName(filteredArray, search)
  }
  return filteredArray;
}

const searchByName = (array, search) => {
  return array.filter((item) => item["first_name"].startsWith(search) || item["last_name"].startsWith(search));
}

const filterByAttribute = (array, type, filter) => {
  if (type === "doctor_names") {
    return array.filter((item) => JSON.stringify(item).toLowerCase().indexOf(filter) !== -1)
  } else {
    return array.filter((item) => item[type] === filter)
  }
}

const sortByDate = (array) => {
  return array.sort((a, b) => a.start.localeCompare(b.start));
}

export {
  dateTimeFormat, dateFormat, birthdayFormat, capitalize, patientTemplate, doctor_names, getTodayDate,
  appointmentFormat, validateNameAppointment, validateDescriptAppointment, getUidPatientfromDescriptionAppointment,
  isAppointmentDue, filterPatientList, reduceAttributes, sortByDate
};
