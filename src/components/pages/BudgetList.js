import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from 'axios/index';
import "../styles/PagesStyle.css";
import {CancelModal, TreatmentModal} from "../widgets/Modals";

const BudgetList = (props) => {
  const [checkout, setCheckout] = useState([]);
  const [isOpen, setIsOpen] = useState();
  const [menu, setMenu] = useState([]);

  const getTreatmentRates = () => {
    axios.get("https://hrtd76yb9b.execute-api.us-east-1.amazonaws.com/api/rates")
      .then((res) => {
        setMenu(res.data.payload);
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
      getTreatmentRates();
  }, []);

  const addNewTreatment = (treatment) => {
    if (checkout.length < 9) {
      setCheckout([...checkout, {uid: treatment.uid, name: treatment.complete_name.trim(), price: treatment.price}]);
    }
  };

  const removeTreatment = (idx) => {
    const temp = [...checkout];
    if (temp.length > 1) {
      temp.splice(idx, 1);
      setCheckout(temp);
    } else {
      setCheckout([]);
    }
  };

  return (
    <div className={"page-container"}>
      <CancelModal isOpen={isOpen} closeModal={() => {
        setIsOpen(false)
      }}/>
      <Paper className={"wide-paper"} style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}
             elevation={2} square={false}>
        <div>
            <h2>Nuevo Presupuesto</h2>
        </div>
      </Paper>
      <div style={{display: "table-column", width: "100%", justifyContent: "center"}}>
        <TreatmentCheckout checkout={checkout} remove={removeTreatment}/>
        <TreatmentMenu treatmentMenu={menu} addNewTreatment={addNewTreatment}/>
      </div>
    </div>
  );
};

const TreatmentMenu = (props) => {
  const {treatmentMenu, addNewTreatment} = props;
  const [level, setLevel] = useState(0);
  const [display, setDisplay] = useState();
  const [clickedItem, setClickedItem] = useState();

  useEffect(() => {
    setDisplay(displayMenu(treatmentMenu, level, clickedItem));
  }, [treatmentMenu, level, clickedItem]);


  const clickItem = (treatment) => {
    if (treatment.parent || treatment.name === "atrás") {
      let new_level = treatment.name === "atrás" ? 0 : 1;
      setLevel(new_level);
      setClickedItem(treatment);
    } else {
      addNewTreatment(treatment);
    }
  }

  return (
    <div className={"side-content"}>
        <div className={"menu-container"}>
          {
            display && display.map((treatment, index) => {
              return (
                <Paper className={"menu-button"} key={index} onClick={() => {
                  clickItem(treatment)
                }}>
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

const displayMenu = (originalMenu, currentLevel, clickedItem) => {
  if (clickedItem && clickedItem.name === "atrás") {
    clickedItem = void 0;
  }
  const displayMenu = [];
  if (currentLevel > 0) {
    displayMenu.push({
      price: "",
      uid: "0",
      name: "atrás",
      parent: false
    });
  }

  originalMenu.forEach(treatment => {
    const levels = [treatment.level1, treatment.level2];
    var index = displayMenu.findIndex(x => (x.name === levels[currentLevel]));
    if (index === -1) {
      if (!clickedItem || (clickedItem && clickedItem["name"] === levels[0])) {
        if (levels[currentLevel + 1] !== "" && currentLevel === 0) {
          displayMenu.push({
            price: treatment.price,
            uid: treatment.uid,
            complete_name: levels[0] + " " + levels[1],
            name: levels[currentLevel],
            parent: true,
          });
        } else {
          displayMenu.push({
            price: treatment.price,
            uid: treatment.uid,
            complete_name: levels[0] + " " + levels[1],
            name: levels[currentLevel],
            parent: false,
          });
        }
      }
    }
  })
  return displayMenu;
}

const TreatmentCheckout = (props) => {
  const {checkout, remove} = props;
  const [isOpen, setIsOpen] = useState(false);

  const finishTreatment = () => {
    setIsOpen(false);
  }

  const getTotal = (checkoutItems) => {
    let total = 0;
    checkoutItems.forEach((item) => {
      total += parseInt(item.price, 10);
    })
    return total;
  }

  const checkout_payload_budget = {
    checkout: checkout,
  };

  const createBudgetPDF = () => {
    axios.post('https://ct9ohf8ai2.execute-api.us-east-1.amazonaws.com/api/pdf',
    JSON.stringify(checkout_payload_budget.checkout), {headers: {'Content-Type': 'application/json'}})
    .then((response) => {
      if(response.status === 201){
        window.open(response.data.payload);
      }
      else{
        console.log('No se ha podido crear el presupuesto');
      }
    })
    .catch((error) => {
    });
  }

  const checkoutTotal =
    <>
      <h3><b>Total: Q{getTotal(checkout)}</b></h3>
      <button className={"finish-treatment-button"} onClick={() => {
        createBudgetPDF();
      }}>Imprimir Presupuesto
      </button>
    </>


  return (
    <>
      <TreatmentModal finishTreatment={finishTreatment} isOpen={isOpen} closeModal={() => {
        setIsOpen(false)
      }}/>
      <Paper className={"lateral-paper"} elevation={2}>
        <h3><b>Presupuesto en Progreso:</b></h3>
        {
          checkout.map((treatment, idx) =>
            <TreatmentItem key={idx} idx={idx} treatment={treatment} remove={remove}/>)
        }
        {checkout.length > 0 ? checkoutTotal : <></>}
      </Paper>
    </>
  );
};

const TreatmentItem = (props) => {
  const {idx, treatment, remove} = props;

  return (
    <div className={"treatment-item"} key={idx}>
      <p style={{textTransform: "capitalize"}}>{treatment.name + " - Q" + treatment.price}
        <button className={"remove-treatment-button"} onClick={() => {
          remove(idx);
        }}>x
        </button>
      </p>
    </div>
  );
};

export {BudgetList};