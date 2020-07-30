import React from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import TextField from '@material-ui/core/TextField';
import {EditForm} from "../forms/PatientForm";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    margin: 'auto',
    maxHeight: 600,
    transform: 'translate(-50%, -50%)'
  }
};

const NewTreatmentModal = (props) => {
  const {uid, treatmentId, patient, closeModal, isOpen} = props;

  return (
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
          TreatmentProp: treatmentId.toLowerCase(),
          Patient: patient
        }}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}>Aceptar</button>

        </Link>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

const NewBudgetModal = (props) => {
  const {uid, treatmentId, patient, closeModal, isOpen} = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Qué tipo de tratamiento se iniciará?">
      <h3>¿Está seguro en empezar un nuevo tratamiento?</h3>
      <div className={"modal-container"}>
        <Link to={{
          pathname: "/budgetlist/",
          PatientId: uid,
          TreatmentProp: treatmentId.toLowerCase(),
          Patient: patient
        }}>
          <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}>Aceptar</button>

        </Link>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

const CancelModal = (props) => {
  const {closeModal, isOpen} = props;
  const history = useHistory();

  return (
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
                  closeModal();
                }}>Aceptar
        </button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};


const TreatmentModal = (props) => {
  const {closeModal, isOpen, finishTreatment} = props;

  return (
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
  );
};

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
                onClick={inactivatePatient}>Aceptar
        </button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

const CheckoutModal = (props) => {
  const {closeModal, isOpen, payTreatments, total, paidAmount} = props;
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [toBePayed, setToBePayed] = useState(0);

  useEffect(() => {
    setToBePayed(total-paidAmount);
    setPaymentAmount(total-paidAmount);
  }, [total, paidAmount]);

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Cuánto desea en pagar en esta cuenta?</h3>
      <div className={"modal-container"} style={{marginBottom: "12px"}}>
        <TextField id="payment-amount" label="Cantidad" variant="outlined" type="number" defaultValue={toBePayed}
                   onChange={(e) => {setPaymentAmount(e.target.value);}}/>
      </div>

      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={() => {payTreatments(paymentAmount)}}>Pagar
        </button>
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

const EditPatientModal = (props) =>{
  const {closeModal, isOpen} = props;
  const {rawPatient} = props;
  const [confirmation, setConfirmation] = useState();

  const handleChange = (e) => {
    setConfirmation({...confirmation, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    setConfirmation(rawPatient)
  }, [rawPatient]);

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>Editar Informacion del Paciente</h3>
      <EditForm confirmation={confirmation} handleChange={handleChange}/>

      <div className={"modal-container"} style={{marginBottom: "12px"}}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={() => {console.log(confirmation)}}>Guardar
        </button>   
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

export {NewTreatmentModal, CancelModal, TreatmentModal, DeleteModal, CheckoutModal, EditPatientModal, NewBudgetModal};