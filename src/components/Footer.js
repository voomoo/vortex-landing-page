import { Row, Col } from "antd";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <img src={logo} alt="" />
      </div>
      <hr />
      <div className="other-links">
        <Row>
          <Col xs={{ span: 12 }} md={{ span: 6 }} className="footer-col">
            <p>OUR COMPANY</p>
            <a href="/">HOW WE WORK</a>
            <a href="/">WHY VORTEX</a>
            <a href="/">VIEW PLANS</a>
            <a href="/">REVIEW</a>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }} className="footer-col">
            <p>HELP ME</p>
            <a href="/">FAQ</a>
            <a href="/">TERMS OF USE</a>
            <a href="/">PRIVACY POLICY</a>
            <a href="/">COOKIES</a>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }} className="footer-col">
            <p>CONTACT</p>
            <a href="/">SALES</a>
            <a href="/">SUPPORT</a>
            <a href="/">LIVE CHAT</a>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }} className="footer-col">
            <p>OTHERS</p>
            <a href="/">CAREER</a>
            <a href="/">PRESS</a>
            <a href="/">LICENSE</a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
