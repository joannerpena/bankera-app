import React from 'react';
import { Container, Jumbotron, Row, Col, Form, Button } from 'react-bootstrap';

const SettingsForm = () => {
  return (
    <Container className="settings-update no-padding" fluid>
      <Jumbotron className="settings-form shadow">
        <Row>
          <Col className="d-flex justify-content-center">
            <h2>Settings</h2>
          </Col>
        </Row>
        <Container fluid>
          <Form>
            <Form.Group controlId="formDateBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy" />
            </Form.Group>
            <Form.Group controlId="formAddress1">
              <Form.Label>Address #1</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formAddress2">
              <Form.Label>Address #2</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group as={Col} controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" maxLength="2" minLength="2" />
              </Form.Group>
              <Form.Group as={Col} controlId="formZipcode">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control type="text" maxLength="7" minLength="7" />
              </Form.Group>
              <Form.Group as={Col} controlId="formCitizen.ControlSelect1">
                <Form.Label>Are you a US Citizen?</Form.Label>
                <Form.Control as="select">
                  <option value="true">Yes</option>
                  <option value="false" selected>
                    No
                  </option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formSSN">
                <Form.Label>SSN - Last 4 Digits</Form.Label>
                <Form.Control type="text" minLength="4" maxLength="4" />
              </Form.Group>
              <Form.Group as={Col} controlId="formDriverLicense">
                <Form.Label>Driver's License</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group as={Col} controlId="formLicenseDueDate">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" />
              </Form.Group>
              <Form.Group as={Col} controlId="formPhoneAlt">
                <Form.Label>Optional Phone</Form.Label>
                <Form.Control type="tel" />
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

export default SettingsForm;
