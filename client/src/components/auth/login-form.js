import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Jumbotron, Button } from 'react-bootstrap';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formLoginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={(e) => onChange(e)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => onChange(e)}
                minLength="8"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit" size="lg" block>
              Login
            </Button>
          </Form>
          <Row>
            <Col>
              <Link
                to="/register"
                className="createAccount-link d-flex justify-content-center"
              >
                I don’t have an account
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default LoginForm;
