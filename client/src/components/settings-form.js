import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// @import Redux
import { connect } from 'react-redux';
import { registerAccount, getCurrentAccount } from '../actions/account';
const SettingsForm = ({
  account: { account, loading },
  registerAccount,
  getCurrentAccount,
  history,
}) => {
  const [formData, setFormData] = useState({
    birth_date: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    us_citizenship: '',
    ssn: '',
    driver_license: '',
    license_dueDate: '',
    phone_number: '',
    phone_optional: '',
  });

  useEffect(() => {
    getCurrentAccount();

    setFormData({
      birth_date: loading || !account.birth_date ? '' : account.birth_date,
      address1: loading || !account.address1 ? '' : account.address1,
      address2: loading || !account.address2 ? '' : account.address2,
      city: loading || !account.city ? '' : account.city,
      state: loading || !account.state ? '' : account.state,
      zipcode: loading || !account.zipcode ? '' : account.zipcode,
      us_citizenship:
        loading || !account.us_citizenship ? '' : account.us_citizenship,
      ssn: loading || !account.ssn ? '' : account.ssn,
      driver_license:
        loading || !account.driver_license ? '' : account.driver_license,
      license_dueDate:
        loading || !account.license_dueDate ? '' : account.license_dueDate,
      phone_number:
        loading || !account.phone_number ? '' : account.phone_number,
      phone_optional:
        loading || !account.phone_optional ? '' : account.phone_optional,
    });
  }, [loading]);

  const {
    birth_date,
    address1,
    address2,
    city,
    state,
    zipcode,
    us_citizenship,
    ssn,
    driver_license,
    license_dueDate,
    phone_number,
    phone_optional,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    registerAccount(formData, history);
  };

  return (
    <Container className="settings-update no-padding" fluid>
      <Jumbotron className="settings-form shadow">
        <Row>
          <Col className="d-flex justify-content-center">
            <h2>Settings</h2>
          </Col>
        </Row>
        <Container fluid>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group controlId="formDateBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="mm/dd/yyyy"
                name="birth_date"
                value={birth_date}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formAddress1">
              <Form.Label>Address #1</Form.Label>
              <Form.Control
                type="text"
                name="address1"
                value={address1}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Label>Address #2</Form.Label>
              <Form.Control
                type="text"
                name="address2"
                value={address2}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="2"
                  minLength="2"
                  name="state"
                  value={state}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formZipcode">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="7"
                  minLength="7"
                  name="zipcode"
                  value={zipcode}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formCitizen.ControlSelect1">
                <Form.Label>Are you a US Citizen?</Form.Label>
                <Form.Control
                  as="select"
                  name="us_citizenship"
                  value={us_citizenship}
                  onChange={(e) => onChange(e)}
                >
                  <option value={false} defaultValue>
                    No
                  </option>
                  <option value={true}>Yes</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formSSN">
                <Form.Label>SSN - Last 4 Digits</Form.Label>
                <Form.Control
                  type="text"
                  minLength="4"
                  maxLength="4"
                  name="ssn"
                  value={ssn}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formDriverLicense">
                <Form.Label>Driver's License</Form.Label>
                <Form.Control
                  type="text"
                  name="driver_license"
                  value={driver_license}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formLicenseDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name="license_dueDate"
                  value={license_dueDate}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone_number"
                  value={phone_number}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formPhoneAlt">
                <Form.Label>Optional Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone_optional"
                  value={phone_optional}
                  onChange={(e) => onChange(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Col className="settings-submit d-flex justify-content-center">
                <Button variant="dark" type="submit" size="lg">
                  Save
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    </Container>
  );
};

SettingsForm.propTypes = {
  getCurrentAccount: PropTypes.func.isRequired,
  registerAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, { getCurrentAccount, registerAccount })(
  withRouter(SettingsForm)
);
