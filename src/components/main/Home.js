import React, {useState} from "react";
import NavBar from "../widgets/NavBar";
import {Dashboard} from "../pages/Dashboard";
import {ContactList} from "../pages/ContactList";
import {PatientList} from "../pages/PatientList";
import {NewPatient} from "../pages/NewPatient";
import {ContactDetail} from "../pages/ContactDetail";
import {Route, Switch} from "react-router-dom";
import {PatientDetail} from "../pages/PatientDetail";
import {TreatmentList} from "../pages/TreatmentList";
import {BudgetList} from "../pages/BudgetList";
import {CheckoutList} from "../pages/CheckoutList";
import {AppointmentList} from "../pages/AppointmentList";
import {Error404} from "../pages/Error404";


const Home = () => {
  const [patientNameFiltering, setPatientNameFiltering] = useState("");

  const searchChange = (event) => {
    setPatientNameFiltering(event.target.value);
  };

  return (
    <div style={{display: "flex"}}>
      <NavBar searchChange={searchChange}/>
      <main className={"home-frame"}>
        <div className={"home-content"}>
          <Switch>
            <Route exact path={"/"} component={Dashboard}/>
            <Route exact path={"/patients"} render={props => <PatientList {...props} search={patientNameFiltering}/>}/>
            <Route exact path={"/patients/:uid"} component={PatientDetail}/>
            <Route exact path={"/contacts"} component={ContactList}/>
            <Route exact path={"/contacts/:uid"} component={ContactDetail}/>
            <Route exact path={"/createpatient"} component={NewPatient}/>
            <Route exact path={"/treatments/:uid"} component={TreatmentList}/>
            <Route exact path={"/budgetlist/"} component={BudgetList}/>
            <Route exact path={"/checkout"} component={CheckoutList}/>
            <Route exact path={"/appointments"} component={AppointmentList}/>
            <Route path='*' exact={true} component={Error404}/>
          </Switch>
        </div>
      </main>
    </div>
  );
};


export {Home};