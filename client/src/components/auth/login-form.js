import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Form, Jumbotron, Button } from 'react-bootstrap';

// @import Redux
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
const LoginForm = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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

LoginForm.propsTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
