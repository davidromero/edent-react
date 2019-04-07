export const createContact = (contact) => {
  return (dispatch, getState) => {
    //make async call
    dispatch({ type: 'CREATE_CONTACT', contact})
  }
};