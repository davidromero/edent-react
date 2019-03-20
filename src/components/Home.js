import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import styles from '../styles/HomeStyle';
import NavBar from './NavBar'
import Dashboard from './Dashboard';
import Contacts from './Contacts'
import Today from './Today'
import Patients from './Patients'
import PatientForm from './forms/PatientForm'
import Exams from './Exams'
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
      <div className={classes.root}>
        <NavBar />
        <main className={classes.homeFrame }>
          <div className={classes.appBarSpacer}/>
          <div className={classes.content}>
              <Switch>
                <Route exact path={'/'} component={Dashboard}/>
                <Route path={'/today'} component={Today}/>
                <Route path={'/patients'} component={Patients}/>
                <Route path={'/exams'} component={Exams}/>
                <Route path={'/contacts'} component={Contacts}/>
                <Route path={'/createpatient'} component={PatientForm}/>
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