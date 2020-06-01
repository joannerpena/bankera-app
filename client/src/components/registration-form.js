import React from 'react';
import { Row, Col, Form, Jumbotron, Button } from 'react-bootstrap';

const RegistrationForm = () => {
  return (
    <Jumbotron className="registration-form shadow">
      <Row>
        <Col>
          <p>Welcome to Bankera</p>
          <h3>Create Your New User</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" />
            </Form.Group>
            <Button variant="dark" type="submit" size="lg" block>
              Submit
            </Button>
          </Form>
          <Row>
            <Col>
              <a href="#" className="login-link d-flex justify-content-center">
                I have an account already
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default RegistrationForm;
