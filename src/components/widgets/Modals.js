import React, {useState} from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    transform: 'translate(-50%, -50%)'
  }
};

const NewTreatmentModal = (props) => {
  const {uid, treatment_id, patient, closeModal, isOpen} = props;

  return(
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Qué tipo de tratamiento se iniciará?">
      <h3>¿Está seguro en empezar un nuevo tratamiento?</h3>
      <div className={"modal-container"}>
        <Link to={{
          pathname: "/treatments/" + uid,
          PatientId: uid,
          TreatmentProp: treatment_id.toLowerCase(),
          Patient: patient
        }}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}>Aceptar</button>
        </Link>

        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  )
}

const CancelModal = (props) => {
  const {closeModal, isOpen} = props;
  const history = useHistory();

  return(
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Está seguro en cancelar el tratamiento?</h3>
      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={() => {
                  history.goBack();
                  localStorage.clear();
                  closeModal()
                }}>Aceptar
        </button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  )
}


const TreatmentModal = (props) => {
  const {closeModal, isOpen, finishTreatment} = props;

  return(
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Está seguro en terminar el tratamiento?</h3>
      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={finishTreatment}>Aceptar
        </button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  )
}

const DeleteModal = (props) => {
  const {closeModal, isOpen, inactivatePatient} = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Está seguro en eliminar este paciente?</h3>
      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={inactivatePatient}>Aceptar</button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar</button>
      </div>
    </Modal>
  )
}

const CheckoutModal = (props) => {
  const {closeModal, isOpen, payTreatments} = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Está seguro en pagar esta cuenta?</h3>
      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={payTreatments}>Aceptar</button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar</button>
      </div>
    </Modal>
  )
}

export {NewTreatmentModal, CancelModal, TreatmentModal, DeleteModal, CheckoutModal};