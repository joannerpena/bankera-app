import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Row, Col, Form, Jumbotron, Button } from 'react-bootstrap';

const RegistrationForm = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
  });

  const { first_name, last_name, email, username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({ first_name, last_name, email, username, password });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

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
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Row>
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={first_name}
                  onChange={(e) => onChange(e)}
                />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={last_name}
                  onChange={(e) => onChange(e)}
                />
              </Col>
            </Form.Row>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <Form.Text>At least 8 character</Form.Text>
            </Form.Group>
            <Button variant="dark" type="submit" size="lg" block>
              Submit
            </Button>
          </Form>
          <Row>
            <Col>
              <Link
                to="/login"
                className="login-link d-flex justify-content-center"
              >
                I have an account already
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

RegistrationForm.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(
  RegistrationForm
);
