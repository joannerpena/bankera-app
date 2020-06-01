import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import pkg from '../../package.json';
import config from '../config/default.json';

// @import Assets
import LightLogo from '../assets/img/bankera-light-logo.svg';
import RegistrationForm from '../components/registration-form';

// @import components

const RegisterPage = () => {
  return (
    <Container className="login-page" fluid>
      <Row>
        <Col className="left-banner" lg={5}>
          <img src={LightLogo} alt="Bankera Light Logo" />
        </Col>
        <Col className="right-banner" lg={7}>
          <RegistrationForm />
          <Row>
            <Col>
              <small>©2020 Bankera, Inc. All rights reserved.</small>
            </Col>
            <Col className="d-flex justify-content-end">
              <small>
                v{pkg.version}
                {config['release-tag']}
              </small>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
