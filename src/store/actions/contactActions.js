const axios = require('axios');

const baseURL = 'https://i7f936vxqh.execute-api.us-east-1.amazonaws.com/edent-contacts-qa';

export const createContact = (contact) => {
  return (dispatch, getState) => {
    axios.post(baseURL + '/contacts', contact)
      .then(response => {
        dispatch({type: "CREATE_CONTACT", response})
      })
      .catch(error => {
        dispatch({type: 'CREATE_CONTACT_ERROR', error})
      });
  }
};

export const fetchContactList = () => {
  return (dispatch, getState) => {
    axios.get(baseURL + '/contacts')
      .then(response => {
        dispatch({type: "FETCH_CONTACTS", response})
      })
      .catch(error => {
        dispatch({type: "FETCH_CONTACTS_ERROR", error})
      })
      .then(function () {
        // always executed
      });
  }
};
