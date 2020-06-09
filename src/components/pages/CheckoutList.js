import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {dateTimeFormat} from '../../utils/utils'
import axios from "axios";
import "../styles/PagesStyle.css";
import Modal from "react-modal";


const CheckoutList = () => {
  const [checkoutList, setCheckoutList] =  useState([]);

  useEffect(() => {
    axios.get("https://219f9v9yfl.execute-api.us-east-1.amazonaws.com/api/checkout")
      .then( (res) => {
        setCheckoutList(res.data.payload);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className={"page-container"}>
      <Paper className={"wide-paper"} elevation={2} square={false}>
        <h2>Pagos Pendientes</h2>
        <h3>Lista de Pagos Pendientes</h3>
      </Paper>
      { checkoutList.length === 0 ? <h2>No hay cuentas pendientes</h2> : <></>}
      {
        checkoutList && checkoutList.map((checkout, index) => {
          return (
            <CheckoutItem key={index} index={index} checkout={checkout} treatmentList={checkout.checkout}/>
          )
        })
      }
    </div>
  )
};

const CheckoutItem = (props) => {
  const {checkout, treatmentList} = props;
  const [total, setTotal] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect( () => {
    let total = 0;
    treatmentList.map((treatment) => {
      total += parseInt(treatment.price)
    })
    setTotal(total)
  }, [])

  //

  const payTreatments = () => {
    console.log("Delete " + checkout.uid)
    axios.delete("https://219f9v9yfl.execute-api.us-east-1.amazonaws.com/api/checkout/" + checkout.uid)
      .then( (res) => {
        console.log("Checkout deleted. " + res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
    setIsOpen(false)
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

  return(
    <Paper className={"wide-paper"} style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
      <div style={{margin: "8px"}}>
        <h2>
          <b style={{textTransform: "capitalize", fontSize: "1.1em"}}>
            {checkout.patient.first_name + " " + checkout.patient.last_name}</b><br/>
        </h2>
        {
          treatmentList && treatmentList.map((treatment, index) => {
            return (
              <li key={index} style={{textTransform: "capitalize"}}>{treatment.name + ": Q" + treatment.price}</li>
            )
          })
        }
      </div>

      <Modal
        isOpen={isOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="¿Estas seguro?">
        <h3>¿Está seguro en pagar esta cuenta?</h3>
        <div className={"modal-container"}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                  onClick={payTreatments}>Aceptar</button>
          <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                  onClick={() => {setIsOpen(false)}}>Cancelar</button>
        </div>
      </Modal>
      <div style={{width: "285px"}}>
        <h3>
          Total: Q{total}
        </h3>
        <button className={"finish-treatment-button"} style={{width: "120px"}}
                onClick={() => {setIsOpen(true)}}>Pagar
        </button><br/>
        <small><i>Realizado en: {dateTimeFormat(checkout.modified_timestamp)}</i></small>
      </div>
    </Paper>
  )
}

export {CheckoutList}