import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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
  const {closeModal, isOpen, payTreatments, total} = props;

  const [value, setValue] = React.useState('completo');

  const handleChange = (event) => {
    if(event.target.namevalue === "parcial"){

    }
    setValue(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="¿Estas seguro?">
      <h3>¿Está seguro en pagar esta cuenta?</h3>
      <div className={"modal-container"}>
        <button className="modal-button" style={{backgroundColor: "rgb(21, 149, 189)"}}
                onClick={payTreatments}>Pago
        </button>
        <FormControl component="fieldset">
        <FormLabel component="legend">Tipo de Pago</FormLabel>
          <RadioGroup aria-label="tipodepago" name="tipodepago" value={value} onChange={handleChange}>
            <FormControlLabel value="completo" control={<Radio />} label="Completo" />
            <FormControlLabel value="parcial" control={<Radio />} label="Parcial" />
          </RadioGroup>
        </FormControl>
        <TextField id="outlined-basic" label="Cantidad" variant="outlined"  defaultValue={total} />
        <button className="modal-button" style={{backgroundColor: "rgb(227,83,83)"}}
                onClick={closeModal}>Cancelar
        </button>
      </div>
    </Modal>
  );
};

export {NewTreatmentModal, CancelModal, TreatmentModal, DeleteModal, CheckoutModal};