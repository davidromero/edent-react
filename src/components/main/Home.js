import React from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/PagesStyles.css";
import NavBar from "../widgets/NavBar";
import Dashboard from "../Dashboard";
import ContactList from "../ContactList";
import Today from "../Today";
import Patients from "../Patients";
import Exams from "../Exams";
import PatientForm from "../NewPatient";
import ContactDetail from "../ContactDetail";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <div style={{display: "flex"} }>
        <NavBar/>
        <main className={"homeFrame"}>
          <div className={"homeContent"}>
            <Switch>
              <Route exact path={"/"} component={Dashboard}/>
              <Route path={"/today"} component={Today}/>
              <Route path={"/patients"} component={Patients}/>
              <Route path={"/exams"} component={Exams}/>
              <Route path={"/contacts"} component={ContactList}/>
              <Route path={"/contact/:uid"} component={ContactDetail} />
              <Route path={"/createpatient"} component={PatientForm}/>
            </Switch>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};


export default withStyles(styles)(Home);