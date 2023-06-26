import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    user_email: '',
    message: ''
  });
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_mpzkz69', 'template_zw204va', '#myForm', 'zRRSWfm75Jo0ZfSvx')
     .then((result) => {
         // show the user a success message
         alert('Message Sent, We will get back to you shortly', result.text);
         resetForm();
     }, (error) => {
         // show the user an error
         alert('An error occurred, Please try again', error.text);
     });
 };



const resetForm = () => {
  setFormData({
    user_name: "",
    user_email: "",
    message: ""
  });

  if (form.current) {
    form.current.reset();
  }
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value
  }));
};


return (
  <section className="contact" id="connect">
    <Container>
      <Row className="align-items-center">
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
            }
          </TrackVisibility>
        </Col>
        <Col size={12} md={6}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail} ref={form} id="myForm">
                  <label>Name</label>
                  <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
                  <label>Email</label>
                  <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
                  <label>Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} />
                  <input type="submit" value="Send" />
                </form>
              </div>
            }
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
);
}

export default Contact;



