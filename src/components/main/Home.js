import React from "react";
import {withStyles} from "@material-ui/core/styles";
import styles from "../styles/PagesStyle.css";
import NavBar from "../widgets/NavBar";
import {Dashboard} from "../pages/Dashboard";
import {ContactList} from "../pages/ContactList";
import {Today} from "../pages/Today";
import {Patients} from "../pages/Patients";
import {Exams} from "../pages/Exams";
import {NewPatient} from "../pages/NewPatient";
import ContactDetail from "../pages/ContactDetail";
import {Route, Switch} from "react-router-dom";

const Home = () => {
  return (
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
            <Route path={"/createpatient"} component={NewPatient}/>
          </Switch>
        </div>
      </main>
    </div>
  );
};


export default withStyles(styles)(Home);