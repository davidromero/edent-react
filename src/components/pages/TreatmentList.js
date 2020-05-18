import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from 'axios/index';
import "../styles/PagesStyle.css";
import {displayMenu} from '../../utils/utils'
import {Prompt, useHistory} from "react-router-dom";
import Modal from "react-modal";

const operatoriaMenu = [
  {
    "price": "0",
    "uid": "22",
    "level1": "prótesis unilateral",
    "type": "operatoria",
    "level2": "valplast"
  },
  {
    "price": "0",
    "uid": "18",
    "level1": "prótesis unilateral",
    "type": "operatoria",
    "level2": "acrílico chiquimula"
  },
  {
    "price": "1500",
    "uid": "16",
    "level1": "coronas",
    "type": "operatoria",
    "level2": ""
  },
  {
    "price": "300",
    "uid": "2",
    "level1": "recina",
    "type": "operatoria",
    "level2": "grande"
  },
  {
    "price": "300",
    "uid": "13",
    "level1": "limpieza con detrartraje",
    "type": "operatoria",
    "level2": ""
  },
  {
    "price": "200",
    "uid": "8",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "niño permanente"
  },
  {
    "price": "50",
    "uid": "9",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "niño leche"
  },
  {
    "price": "250",
    "uid": "1",
    "level1": "recina",
    "type": "operatoria",
    "level2": "pequeña"
  },
  {
    "price": "0",
    "uid": "31",
    "level1": "prótesis total",
    "type": "operatoria",
    "level2": "cromo guatemala"
  },
  {
    "price": "200",
    "uid": "6",
    "level1": "amalgama",
    "type": "operatoria",
    "level2": "grande"
  },
  {
    "price": "0",
    "uid": "28",
    "level1": "prótesis total",
    "type": "operatoria",
    "level2": "acrílico chiquimula"
  },
  {
    "price": "0",
    "uid": "30",
    "level1": "prótesis total",
    "type": "operatoria",
    "level2": "cromo chiquimula"
  },
  {
    "price": "0",
    "uid": "24",
    "level1": "prótesis bilateral",
    "type": "operatoria",
    "level2": "acrílico guatemala"
  },
  {
    "price": "0",
    "uid": "27",
    "level1": "prótesis bilateral",
    "type": "operatoria",
    "level2": "valplast"
  },
  {
    "price": "150",
    "uid": "5",
    "level1": "amalgama",
    "type": "operatoria",
    "level2": "pequeña"
  },
  {
    "price": "350",
    "uid": "4",
    "level1": "carilla",
    "type": "operatoria",
    "level2": "grande"
  },
  {
    "price": "0",
    "uid": "32",
    "level1": "prótesis total",
    "type": "operatoria",
    "level2": "valplast"
  },
  {
    "price": "0",
    "uid": "23",
    "level1": "prótesis bilateral",
    "type": "operatoria",
    "level2": "acrílico chiquimula"
  },
  {
    "price": "0",
    "uid": "19",
    "level1": "prótesis unilateral",
    "type": "operatoria",
    "level2": "acrílico guatemala"
  },
  {
    "price": "0",
    "uid": "26",
    "level1": "prótesis bilateral",
    "type": "operatoria",
    "level2": "cromo guatemala"
  },
  {
    "price": "300",
    "uid": "7",
    "level1": "relleno blanco en cápsula",
    "type": "operatoria",
    "level2": ""
  },
  {
    "price": "200",
    "uid": "11",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "adulto superiores"
  },
  {
    "price": "300",
    "uid": "3",
    "level1": "carilla",
    "type": "operatoria",
    "level2": "pequeña"
  },
  {
    "price": "0",
    "uid": "20",
    "level1": "prótesis unilateral",
    "type": "operatoria",
    "level2": "cromo chiquimula"
  },
  {
    "price": "0",
    "uid": "29",
    "level1": "prótesis total",
    "type": "operatoria",
    "level2": "acrílico guatemala"
  },
  {
    "price": "0",
    "uid": "21",
    "level1": "prótesis unilateral",
    "type": "operatoria",
    "level2": "cromo guatemala"
  },
  {
    "price": "0",
    "uid": "25",
    "level1": "prótesis bilateral",
    "type": "operatoria",
    "level2": "cromo chiquimula"
  },
  {
    "price": "300",
    "uid": "12",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "coidal superiores"
  },
  {
    "price": "100",
    "uid": "17",
    "level1": "cementación de coronas",
    "type": "operatoria",
    "level2": ""
  },
  {
    "price": "150",
    "uid": "10",
    "level1": "exodoncia",
    "type": "operatoria",
    "level2": "adulto anteriores"
  },
  {
    "price": "300",
    "uid": "14",
    "level1": "blanqueamiento",
    "type": "operatoria",
    "level2": ""
  }
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
      let new_level = treatment.name === "atrás" ? 0 : 1;
      setLevel(new_level);
      setClickedItem(treatment)
    }
    else{
      addNewTreatment(treatment)
    }
  }

  return(
    <div className={"side-content"}>
      <div className={"menu-container"}>
        {
          display && display.map((treatment, index) => {
            return (
              <Paper className={"menu-button"} key={index} onClick={() => {clickItem(treatment)}}>
                <h2 style={{textTransform: "capitalize"}}>{treatment.name}</h2>
                <small>{treatment.parent || treatment.price === "" ? "" : "Q" + treatment.price}</small>
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

  return(
    <div className={"treatment-item"} key={idx}>
      <text style={{textTransform: "capitalize"}}>{treatment.name + " - Q" + treatment.price}
      <button className={"remove-treatment-button"} onClick={() => {remove(idx)}}>x</button></text>
    </div>
  )
}

export {TreatmentList};