import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import cvFile from "../assets/UdayKumarCV.pdf";  // Import your CV file

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/uday-kumar-g-3956312a4/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/UDAY2031"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/geek_2031?igsh=YjhscHI4aWVud294"><img src={navIcon3} alt="Icon" /></a>
            </div>
            {/* Add CV download button here */}
            <div className="cv-download">
              <a href={cvFile} download className="btn btn-primary">Download CV</a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
