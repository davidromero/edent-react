const axios = require('axios');

const baseURL = 'https://i7f936vxqh.execute-api.us-east-1.amazonaws.com/edent-contacts-qa';
// const baseURL = 'http://localhost:8000';

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
  return (dispatch, action) => {
    axios.get(baseURL + '/contacts')
      .then(response => {
        dispatch({type: "FETCH_CONTACTS", response})
      })
      .catch(error => {
        dispatch({type: "FETCH_CONTACTS_ERROR", error})
      })
  }
};
