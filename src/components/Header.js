import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import svgl from '../images/logo.svg';
import { Reveal } from './Reveal';
import ProductInquiryForm from './ProductInquiryForm';
// import emailjs from '@emailjs/browser';
import FormLogin from './FormLogin';

function Header() {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [setStateMessage] = useState("");

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleInquirySubmit = (templateFormData) => {
  //   emailjs
  //     .send(
  //       "service_4b5yn4v",
  //       "template_uykwfy4",
  //       templateFormData,
  //       "ODy0NGK6EYA9e1gfI"
  //     )
  //     .then((result) => {
  //       setStateMessage("تم إرسال البريد بنجاح");
  //       setShowAlert(true);
  //       console.log(result.status);
  //       handleClose();
  //     })
  //     .catch((error) => {
  //       setStateMessage("حدث خطأ ما لم يتم إرسال البريد");
  //       setShowAlert(true);
  //       console.log(error);
  //     });
  // };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="green-light-bg border-bottom-rad"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          <Reveal>
            <img className="icon-brand" src={svgl} alt="Logo" />
          </Reveal>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Reveal>
              <Link className="nav-link" to={`/`}>
                الرئيسية
              </Link>
            </Reveal>
            <Reveal>
              <Link className="nav-link" to={`/OurProducts`}>
                منتجاتنا
              </Link>
            </Reveal>
            <Reveal>
              <Link className="nav-link" to={`/AboutUs`}>
                عن نبتتي
              </Link>
            </Reveal>
          </Nav>
          <Nav className='sign-div gap-2'>
            <FormLogin />
          </Nav>
        </Navbar.Collapse>
      </Container>

      <ProductInquiryForm
        show={show}
        handleClose={handleClose}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        setStateMessage={setStateMessage}
      />
    </Navbar>
  );
}

export default Header;
