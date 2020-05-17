import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from 'axios/index';
import "../styles/PagesStyle.css";
import {displayMenu} from '../../utils/utils'
import {Prompt, useHistory} from "react-router-dom";
import Modal from "react-modal";

const operatoriaMenu = [
  {
    level3: "valplast",
    price: "0",
    uid: "22",
    level1: "prótesis",
    type: "operatoria",
    level2: "removible unilateral"
  },
  {
    "level3": "acrílico chiquimula",
    "price": "0",
    "uid": "18",
    "level1": "prótesis",
    "type": "operatoria",
    "level2": "removible unilateral"
  },
  {
    "level3": "",
    "price": "1500",
    "uid": "16",
    "level1": "coronas",
    "type": "operatoria",
    "level2": ""
  },
  {
    "level3": "",
    "price": "75",
    "uid": "40",
    "level1": "limpieza",
    "type": "seguro",
    "level2": ""
  },
  {
    "level3": "",
    "price": "300",
    "uid": "2",
    "level1": "recina",
    "type": "operatoria",
    "level2": "grande"
  },
  {
    "level3": "",
    "price": "300",
    "uid": "13",
    "level1": "limpieza con detrartraje",
    "type": "operatoria",
    "level2": ""
  },
  {
    "level3": "",
    "price": "200",
    "uid": "8",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "niño permanente"
  },
  {
    "level3": "",
    "price": "50",
    "uid": "9",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "niño leche"
  },
  {
    "level3": "",
    "price": "250",
    "uid": "1",
    "level1": "recina",
    "type": "operatoria",
    "level2": "pequeña"
  },
  {
    "level3": "cromo guatemala",
    "price": "0",
    "uid": "31",
    "level1": "prótesis",
    "type": "operatoria",
    "level2": "removible total"
  },
  {
    "level3": "",
    "price": "200",
    "uid": "6",
    "level1": "amalgama",
    "type": "operatoria",
    "level2": "grande"
  },
  {
    "level3": "",
    "price": "900",
    "uid": "38",
    "level1": "frenectomía",
    "type": "cirugia",
    "level2": "frenillo"
  },
  {
    "level3": "acrílico chiquimula",
    "price": "0",
    "uid": "28",
    "level1": "prótesis",
    "type": "operatoria",
    "level2": "removible total"
  },
  {
    "level3": "cromo chiquimula",
    "price": "0",
    "uid": "30",
    "level1": "prótesis",
    "type": "operatoria",
    "level2": "removible total"
  }
]
const seguroMenu = [
  {treatment_uid: "123", treatment_name: "Evaluación"},
  {treatment_uid: "124", treatment_name: "Limpieza"},
  {treatment_uid: "125", treatment_name: "Amalgama"},
  {treatment_uid: "126", treatment_name: "Exodoncia Leche"},
  {treatment_uid: "126", treatment_name: "Exodoncia Adulto"},
]
const endodonciaMenu = [
  {treatment_uid: "123", treatment_name: "TCR 1"},
  {treatment_uid: "124", treatment_name: "TCR 2"},
  {treatment_uid: "125", treatment_name: "TCR 3"},
]
const cirugiaMenu = [
  {treatment_uid: "123", treatment_name: "Cordales"},
  {treatment_uid: "124", treatment_name: "Frenectomía"},
]

const TreatmentList = (props) => {
  const {uid} = props.match.params;
  const [checkout, setCheckout] = useState([]);
  const [treatmentType, setTreatmentType] = useState();
  const [patient, setPatient] = useState();
  const history = useHistory();

  useEffect( () => {initValues()},[])

  const initValues = () => {
    const {TreatmentProp, Patient} = props.location;
    if(TreatmentProp !== undefined){
      localStorage.setItem("patient", JSON.stringify(Patient));
      localStorage.setItem("treatment-type", TreatmentProp);
      setTreatmentType(TreatmentProp);
      setPatient(Patient);
    }
    else{
      setPatient(JSON.parse(localStorage.getItem("patient")));
      setTreatmentType(localStorage.getItem("treatment-type"));
    }
  };

  const addNewTreatment = (treatment) => {
    if(checkout.length < 9){
      setCheckout([...checkout, {id: checkout.length, name: treatment.complete_name, price: treatment.price}]);
    }
  };

  const removeTreatment = (idx) => {
    const temp = [...checkout];
    if (temp.length > 1){
      temp.splice(idx, 1);
      setCheckout(temp);
    }
    else{
      setCheckout([]);
    }
  };


  return (
    <div className={"page-container"}>
      <Prompt
        when={true}
        message='Al salir el tratamiento se cancelará. ¿Está seguro?'
      />
      <Paper className={"wide-paper"} style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}
             elevation={2} square={false}>
        <div>
          {patient ?
            <h2 style={{textTransform: "capitalize"}}>Nuevo Tratamiento: {patient.first_name + " " + patient.last_name}</h2> :
            <h2>Nuevo Tratamiento</h2>}
          <h3 style={{textTransform: "capitalize"}}>{treatmentType}</h3>
        </div>
        <div style={{width: "315px", display: "flex", justifyContent: "center"}}>
          <button className={"finish-treatment-button"} style={{margin: "auto"}}
                  onClick={() => {history.goBack()}}>Cancelar Tratamiento</button>
        </div>
      </Paper>
      <div style={{display: "table-column", width: "100%", justifyContent: "center"}}>
        <TreatmentCheckout checkout={checkout} remove={removeTreatment}/>
        <TreatmentMenu treatmentMenu={operatoriaMenu} addNewTreatment={addNewTreatment}/>
      </div>
    </div>
  )
};

const TreatmentMenu = (props) => {
  const {treatmentMenu, addNewTreatment} = props;
  const [level, setLevel] = useState(0);
  const [display, setDisplay] = useState();
  const [clickedItem, setClickedItem] = useState();

  useEffect( () => {setDisplay(displayMenu(treatmentMenu, level, clickedItem));}, [level])


  const clickItem = (treatment) => {
    console.log("click level " + level);
    console.log(treatment.name)
    if (treatment.parent || treatment.name === "atrás"){
      let new_level = treatment.name !== "atrás" ? (level < 2 ? level + 1 : level) : level - 1;
      setLevel(new_level);
    }
    else{
      addNewTreatment(treatment)
    }
    setClickedItem(treatment)
  }

  return(
    <div className={"side-content"}>
      <div className={"menu-container"}>
        {
          display && display.map((treatment, index) => {
            return (
              <Paper className={"menu-button"} key={index} onClick={() => {clickItem(treatment)}}>
                <h2>{treatment.name + " " + (treatment.parent ? "" : "Q" +treatment.price)}</h2>
              </Paper>
            )
          })
        }
      </div>
    </div>
  )
}


const TreatmentCheckout = (props) => {
  const {checkout, remove} = props;
  const [isOpen, setIsOpen] = useState(false);

  const finishTreatment = () => {
    setIsOpen(false);
  }

  const getTotal = (checkoutItems) => {
    let total = 0
    checkoutItems.map((item) => {
      total += parseInt(item.price)
    })
    return total;
  }

  const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      margin: 'auto',
      transform: 'translate(-50%, -50%)'
    }
  };

  const checkoutTotal =
    <>
      <h3><b>Total: Q{getTotal(checkout)}</b></h3>
      <button className={"finish-treatment-button"} onClick={() => {setIsOpen(true)} }>Finalizar tratamiento</button>
    </>

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="¿Estas seguro?">
        <h3>¿Está seguro en terminar el tratamiento?</h3>
        <div className={"modal-container"}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                  onClick={finishTreatment}>Aceptar</button>
          <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                  onClick={() => {setIsOpen(false)}}>Cancelar</button>
        </div>
      </Modal>

      <Paper className={"lateral-paper"} elevation={2}>
        <h3><b>Tratamientos en Progreso:</b></h3>
        {
          checkout.map((treatment, idx) =>
            <TreatmentItem key={idx} idx={idx} treatment={treatment} remove={remove}/>)
        }
        {checkout.length > 0 ? checkoutTotal : <></>}
      </Paper>
    </>
  )
}

const TreatmentItem = (props) => {
  const {idx, treatment, remove} = props;
  console.log(JSON.stringify(treatment))

  return(
    <div className={"treatment-item"} key={idx}>
      {treatment.name + " - Q" + treatment.price}
      <button className={"remove-treatment-button"} onClick={() => {remove(idx)}}>x</button>
    </div>
  )
}

export {TreatmentList};