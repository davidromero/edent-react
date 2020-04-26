import React from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/PagesStyle.css";
import NavBar from "../widgets/NavBar";
import {Dashboard} from "../pages/Dashboard";
import {ContactList} from "../pages/ContactList";
import {Calendar} from "../pages/Calendar";
import {PatientList} from "../pages/PatientList";
import {NewPatient} from "../pages/NewPatient";
import {ContactDetail} from "../pages/ContactDetail";
import {Route, Switch} from "react-router-dom";
import {PatientDetail} from "../pages/PatientDetail";

const Home = () => {
  return (
    <div style={{display: "flex"} }>
      <NavBar/>
      <main className={"home-frame"}>
        <div className={"home-content"}>
          <Switch>
            <Route exact path={"/"} component={Dashboard}/>
            <Route exact path={"/calendar"} component={Calendar}/>
            <Route exact path={"/patients"} component={PatientList}/>
            <Route exact path={"/patients/:uid"} component={PatientDetail} />
            <Route exact path={"/contacts"} component={ContactList}/>
            <Route exact path={"/contacts/:uid"} component={ContactDetail} />
            <Route exact path={"/createpatient"} component={NewPatient}/>
          </Switch>
        </div>
      </main>
    </div>
  );
};


export default withStyles(styles)(Home);