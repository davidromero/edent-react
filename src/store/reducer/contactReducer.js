const initState = {
};

const contactReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_CONTACT':
      console.log('created contact', action.contact);
      break;
    case 'CREATE_CONTACT_ERROR':
      console.log('error creating contact', action.error);
      break;
    case 'FETCH_CONTACTS':
      console.log('fetched contacts', action.response);
      const { payload } = action.response.data;
      state.contactList = payload;
      break;
    case 'FETCH_CONTACTS_ERROR':
      console.log('error fetching contacts', action.error);
      break;
    default:
  }
  return {...state};
};

export default contactReducer;