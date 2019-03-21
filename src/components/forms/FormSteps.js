import React, {Component} from "react";
import GeneralForm from "./GeneralForm";

export class FormSteps extends Component {
  state = {
    step: 1,
  };


  render() {
    const {step} = this.state;

    switch (step) {
      case 1:
        return (
          <GeneralForm/>
        );
      case 2:
        return (
          <GeneralForm/>
        );
      case 3:
        return (
          <GeneralForm/>
        );
      default:
        return null;
    }
  }
}

export default FormSteps;