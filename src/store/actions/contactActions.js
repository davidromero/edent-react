const axios = require('axios');

export const createContact = (contact) => {
  return (dispatch, getState) => {
    axios.post('/contacts', {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    dispatch({type: "CREATE_CONTACT", contact})
  }
};

export const fetchContactList = () => {
  return (dispatch, getState) => {
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    dispatch({type: "FETCH_CONTACTS"})
  }
};
