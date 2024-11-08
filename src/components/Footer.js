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
              <a href="https://www.linkedin.com/in/uday-kumar-g-3956312a4/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/UDAY2031">
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/geek_2031?igsh=YjhscHI4aWVud294">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            {/* Add some space between social icons and CV download */}
            <div className="social-space"></div>  
            
            {/* Add CV download button */}
            <div className="cv-download">
              <a href={cvFile} download className="btn btn-primary cv-btn">
                Download CV
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
