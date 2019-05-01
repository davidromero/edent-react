import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/ContactsStyle";
import {fetchContactList} from "../store/actions/contactActions"
import {connect} from "react-redux";

class ContactDetail extends Component {

  componentDidMount() {
    const {contact} = this.props;
    contact ?
      console.log("truuee") :
      console.log("falseee");
  }

  render() {
    const {classes, contact} = this.props;
    return (
      contact ? (
        <div className={classes.base}>
          <Paper className={classes.paper} elevation={2}>
            <Typography variant="h5" component="h3">
              {contact.first_name + " " + contact.last_name}
            </Typography>

          </Paper>

        </div>
      ) : (
        <div className={classes.base}>
          <Paper className={classes.paper} elevation={2}>
            <Typography variant="h5" component="h3">
              Cargando...
            </Typography>
          </Paper>
          {/*{this.props.dispatch(fetchContactList())}*/}
        </div>
      )
    );
  }
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const uid = ownProps.match.params.uid;
  return {
    contact: state.contacts.contactList.find(contact => contact.uid === uid)
  };
};

export default connect(mapStateToProps)(withStyles(styles)(ContactDetail));