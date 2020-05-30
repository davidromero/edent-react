import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import {dateTimeFormat, capitalize} from '../../utils/utils'
import axios from "axios";
import "../styles/PagesStyle.css";


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
      { checkoutList.length === 0 ? <h2>Cargando...</h2> : <></>}
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
  const {index, checkout, treatmentList} = props;
  const [total, setTotal] = useState(0);

  useEffect( () => {
    let total = 0;
    treatmentList.map((treatment) => {
      total += parseInt(treatment.price)
    })
    setTotal(total)
  }, [])


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

      <div style={{width: "285px"}}>
        <h3>
          Total: Q{total}
        </h3>
        <button className={"finish-treatment-button"} style={{width: "120px"}}
                onClick={() => {}}>Pagar
        </button><br/>
        <small><i>Realizado en: {dateTimeFormat(checkout.modified_timestamp)}</i></small>
      </div>
    </Paper>
  )
}

export {CheckoutList}