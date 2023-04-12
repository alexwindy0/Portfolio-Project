import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.svg";
import emailme from "../assets/img/envelope-at.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.github.com/alexwindy0" target="_"><img src={github} alt="github"/></a>
            <a href="https://www.linkedin.com/in/alex-windy-528045244/" target="_"><img src={linkedin} alt="linkedin"/></a>
            <a href="mailto:alexekwem@gmail.com"><img src={emailme} alt="gmail"/></a>
            </div>
            <p>Copyright &copy;2023. By AlexWindy<br/>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}