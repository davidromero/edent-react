
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


const displayMenu = (originalMenu, currentLevel, clickedItem) => {
  console.log(JSON.stringify(clickedItem));
  if (clickedItem && clickedItem.name === "atrás"){
    clickedItem = undefined;
  }
  const displayMenu = [];
  // add back button for inner navigation
  if(currentLevel > 0) {
    displayMenu.push({
      price: "",
      uid: "0",
      name: "atrás",
      parent: false
    })
  }

  originalMenu.forEach(treatment => {
    const levels = [treatment.level1, treatment.level2]
    var index = displayMenu.findIndex(x => x.name === levels[currentLevel])
    if (index === -1){
      if (!clickedItem || (clickedItem && clickedItem["name"] === levels[0])){
        if (levels[currentLevel + 1] !== "" && currentLevel === 0){
          //Agregar padre
          displayMenu.push({
            price: treatment.price,
            uid: treatment.uid,
            complete_name: levels[0] + " " + levels[1],
            name: levels[currentLevel],
            parent: true,
          })
        }
        else{
          //Agregar hoja
          displayMenu.push({
            price: treatment.price,
            uid: treatment.uid,
            complete_name: levels[0] + " " + levels[1],
            name: levels[currentLevel],
            parent: false,
          })
        }
      }
    }
  })
  return displayMenu;
}

export {dateTimeFormat, dateFormat, birthdayFormat, capitalize, patientTemplate, displayMenu}