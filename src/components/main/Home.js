import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles/HomeStyle";
import NavBar from "./NavBar";
import Dashboard from "../Dashboard";
import ContactList from "../ContactList";
import Today from "../Today";
import Patients from "../Patients";
import Exams from "../Exams";
import PatientForm from "../NewPatient";
import ContactDetail from "../ContactDetail";
import {Route, Switch} from "react-router-dom";

class Home extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.homeRoot}>
        <NavBar/>
        <main className={classes.homeFrame}>
          <div className={classes.appBarSpacer}/>
          <div className={classes.homeContent}>
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
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);