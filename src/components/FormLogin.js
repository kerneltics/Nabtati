import React from "react";
import { useState } from "react";
import ProductInquiryForm from "./ProductInquiryForm";
import { Button, Modal } from "react-bootstrap";
const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [setStateMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // for alert box ---
  const alertShow = () => setAlert(true);
  const alertClose = () => setAlert(false);
  const formShow = () => {
    alertClose();
    handleShow();
  }
  return (

    <>
      <button type="button" className='sign-link sign-in' onClick={alertShow}>
        تسجيل
      </button>
      <Modal show={alert} onHide={alertClose}>
        <Modal.Header closeButton>
          <Modal.Title>تنبيه</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          لايتوفر حالياً التسجيل في الموقع إذا كنت مهتم في أحدى النباتات ارسل لنا طلبك
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="secondary" onClick={alertClose}>
            إغلاق
          </Button>
          <Button variant="success" onClick={formShow}>
            أنا مهتم
          </Button>
        </Modal.Footer>
      </Modal>
      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}
      />
    </>
  )
}

export default FormLogin;



