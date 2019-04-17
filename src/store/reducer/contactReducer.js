const initState = {
  contactList: [
    { uid: "0001", first_name: "First Name", last_name: "Last Name", sex: "male", phone_number: "01234567",
      email: "email@mail.com", birthday: "1995-02-08", location: "Guatemala", address: "Guatemala", visit_reason: "Ortodoncia"},
    { uid: "0002", first_name: "First Name", last_name: "Last Name", sex: "male", phone_number: "01234567",
      email: "email@mail.com", birthday: "1995-02-08", location: "Guatemala", address: "Guatemala", visit_reason: "Odontología"},
    { uid: "0003", first_name: "First Name", last_name: "Last Name", sex: "male", phone_number: "01234567",
      email: "email@mail.com", birthday: "1995-02-08", location: "Guatemala", address: "Guatemala", visit_reason: "Ortodoncia"},
  ]
};

const contactReducer = (state = initState, action) => {

  return state
};

export default contactReducer;