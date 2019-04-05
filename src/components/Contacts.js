import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles/ContactsStyle";
import { connect } from "react-redux"

class Contacts extends Component {

  render() {
    const {classes, contactList } = this.props;

    return (
      <div className={classes.base}>
        <Paper className={classes.paper} elevation={2} square={false}>
          <Typography variant="h5" component="h3">
            Contactos
          </Typography>
          {
            contactList && contactList.map(contact => {
              return (
                <div>
                  <Typography> { contact.first_name }</Typography>
                </div>
              )
            })
          }

        </Paper>

      </div>
    );
  }
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) =>{
  return {
    contactList: state.contacts.contactList,
  }
};

export default connect(mapStateToProps) (withStyles(styles) (Contacts));