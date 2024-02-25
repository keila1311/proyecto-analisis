import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

export default function BankModal({ show, handleClose }) {
    const [fullscreen, setFullscreen] = useState(true);

  // eslint-disable-next-line no-unused-vars
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
  }

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Banco</Modal.Title>
      </Modal.Header>
      <Modal.Body>Contenido</Modal.Body>
    </Modal>
  );
}

BankModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };