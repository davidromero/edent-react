import React, {useState} from "react";
import NavBar from "../widgets/NavBar";
import {Dashboard} from "../pages/Dashboard";
import {ContactList} from "../pages/ContactList";
import {Calendar} from "../pages/Calendar";
import {PatientList} from "../pages/PatientList";
import {NewPatient} from "../pages/NewPatient";
import {ContactDetail} from "../pages/ContactDetail";
import {Route, Switch} from "react-router-dom";
import {PatientDetail} from "../pages/PatientDetail";
import {TreatmentList} from "../pages/TreatmentList";
import {CheckoutList} from "../pages/CheckoutList";
import {AppointmentList} from "../pages/AppointmentList";

const Home = () => {
  const [patientNameFiltering, setPatientNameFiltering] = useState();

  const onChange = (event) => {
    setPatientNameFiltering(event.target.value);
    //console.log("filtering " + patientNameFiltering);
  };

  return (
    <div style={{display: "flex"}}>
      <NavBar onChange={onChange}/>
      <main className={"home-frame"}>
        <div className={"home-content"}>
          <Switch>
            <Route exact path={"/"} component={Dashboard}/>
            <Route exact path={"/calendar"} component={Calendar}/>
            <Route exact path={"/patients"} component={PatientList} patientNameFiltering={patientNameFiltering}/>
            <Route exact path={"/patients/:uid"} component={PatientDetail}/>
            <Route exact path={"/contacts"} component={ContactList}/>
            <Route exact path={"/contacts/:uid"} component={ContactDetail}/>
            <Route exact path={"/createpatient"} component={NewPatient}/>
            <Route exact path={"/treatments/:uid"} component={TreatmentList}/>
            <Route exact path={"/checkout"} component={CheckoutList}/>
            <Route exact path={"/appointments"} component={AppointmentList}/>
          </Switch>
        </div>
      </main>
    </div>
  );
};


export {Home};