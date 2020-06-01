import React from 'react';
import { Row, Col, Form, Jumbotron, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Jumbotron className="login-form">
      <Row>
        <Col>
          <p>Welcome to Bankera</p>
          <h3>Log Into your Account</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formLoginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="dark" type="submit" size="lg" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default LoginForm;
