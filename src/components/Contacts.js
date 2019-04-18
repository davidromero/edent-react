import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/ContactsStyle";
import { Link } from "react-router-dom"
import {connect} from "react-redux";

class Contacts extends Component {

  render() {
    const {classes, contactList} = this.props;

    return (
      <div className={classes.base}>
        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Contactos
          </Typography>
          <div className={classes.container}>
          {
            contactList && contactList.map((contact) => {
              return (
                <Link to={"contact/" + contact.uid}>
                  <Paper className={classes.itemContainer}>
                    <Typography>
                      <b>{contact.first_name + " " + contact.last_name}</b><br/>
                      Teléfono: {contact.phone_number}<br/>
                      Clínica: {contact.location}
                    </Typography>
                  </Paper>
                </Link>
              );
            })
          }
          </div>
        </Paper>

      </div>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contacts.contactList,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(Contacts));