import React from "react";
import "../styles/PagesStyle.css";
import {ServiceDetailBudget} from "../widgets/BudgetCards";

const Budget = () =>{

    

    return(
        <div>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <div>
              <h2>Creacion de Presupuesto </h2>
            </div>
          </div>
          <ServiceDetailBudget serviceName={"Operatoria"} treatmentId={"operatoria"}/>
          <ServiceDetailBudget serviceName={"Endodoncia"} treatmentId={"endodoncia"}/>
          <ServiceDetailBudget serviceName={"Cirugía"} treatmentId={"cirugia"}/>
          <ServiceDetailBudget serviceName={"Seguro"} treatmentId={"seguro"}/>
          <ServiceDetailBudget serviceName={"Ortodoncia"} treatmentId={"ortodoncia"}/>
        </div>
    );
};

export {Budget};