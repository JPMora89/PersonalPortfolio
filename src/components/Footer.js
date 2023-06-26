import { Container, Row, Col } from "react-bootstrap";
import  MailchimpForm  from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navicon1 from "../assets/img/navicon1.svg";
import navicon2 from "../assets/img/navicon2.svg";
import navicon3 from "../assets/img/navicon3.svg";


function Footer ()  {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img id="navbarlogo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navicon1} alt="Icon" /></a>
              <a href="#"><img src={navicon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navicon3} alt="Icon" /></a> */}
            </div>
            <p>JPMora</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
} 

export default Footer;