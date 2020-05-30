import React from 'react';
import { Row, Col, Jumbotron, Container } from 'react-bootstrap';

// @import Assets
import LightLogo from '../assets/img/bankera-light-logo.svg';
const Footer = () => {
  return (
    <Jumbotron className="footer" fluid>
      <Container fluid>
        <Row>
          <Col className="d-flex flex-column">
            <img src={LightLogo} alt="Bankera Light Logo" />
            <a href="#">Personal</a>
            <a href="#">Business</a>
            <a href="#">About Us</a>
            <a href="#">ContactUs</a>
            <a href="#">Sign Up</a>
          </Col>
          <div className="vl"></div>
          <Col className="d-flex flex-column menu-footer">
            <h5>Why Bankera</h5>
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Benefits and Services</a>
            <a href="#">Bankers Essential</a>
            <a href="#">Bankera Plus</a>
            <a href="#">Special Deals</a>
          </Col>
          <Col className="d-flex flex-column menu-footer">
            <h5>Personal Banking</h5>
            <a href="#">Credit Card</a>
            <a href="#">Checking Account</a>
            <a href="#">Saving Account</a>
            <a href="#">Investments</a>
            <a href="#">IRA</a>
            <a href="#">Credit Score</a>
          </Col>
          <Col className="d-flex flex-column menu-footer">
            <h5>Business Banking</h5>
            <a href="#">Small Business Account</a>
            <a href="#">Commercial Accounts</a>
          </Col>
          <Col className="d-flex flex-column menu-footer">
            <h5>Bankera Help Center</h5>
            <a href="#">Bankera Help</a>
            <a href="#">Budget</a>
            <a href="#">Investments</a>
            <a href="#">Account &amp; Transactions</a>
            <a href="#">Goals</a>
            <a href="#">FAQ</a>
          </Col>
        </Row>
        <Row>
          <small className="copyright-text">
            ©2020 Bankera, Inc. All rights reserved.
          </small>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Footer;
