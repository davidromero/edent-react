import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";

const patientTemp = {
  visit_reason: "odontologia",
  sex: "female",
  created_by: "local",
  address: "san cristobal",
  modified_by: "local",
  email: "-",
  uid: "4cf72885-fe45",
  active: true,
  clinic_location: "amatitlan",
  last_name: "ramirez jimenez",
  contact_uid: "4cf72885-fe45",
  first_name: "consuelo",
  phone_number: "55108273",
  created_timestamp: "2020-04-18 17:21:25.340325-06:00",
  modified_timestamp: "2020-04-18 17:21:25.340325-06:00",
  birthday: "1955-11-09"
}

const PatientDetail = (props) => {
  const {uid} = props.match.params;
  console.log("UID: " + uid);
  const [patient, setPatient] = useState(patientTemp);

  useEffect(() => {
    console.log("Fetching patient by id...");
    // axios.get("https://rwcmecc1l5.execute-api.us-east-1.amazonaws.com/api/patients/" + uid)
    //   .then( (res) => {
    //     console.log("Contact fetched from API");
    //     setContact(res.data.payload);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }, []);

  return (
    <div className={"page-container"}>
      {patient !== {} &&
        <Paper className={"wide-paper"} elevation={2}>
          <h2>{patient.first_name}</h2>

        </Paper>
      }
    </div>
  );
}



export {PatientDetail};