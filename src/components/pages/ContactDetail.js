import React, {useEffect, useState} from "react";
import {Paper} from "@material-ui/core";
import axios from "axios";

const contactTemp = {

}



const ContactDetail = (props) => {
  const {uid} = props.match.params
  console.log("UID: " + uid);
  const [contact, setContact] = useState(contactTemp);

  useEffect(() => {
    console.log("Fetching contact by id...");
    // axios.get("https://9jtkflgqhe.execute-api.us-east-1.amazonaws.com/api/contacts/" + uid)
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
      {contact !== {} &&
        <Paper className={"wide-paper"} elevation={2}>
          <h2>{contact.first_name}</h2>

        </Paper>
      }
    </div>
  );
}



export {ContactDetail};