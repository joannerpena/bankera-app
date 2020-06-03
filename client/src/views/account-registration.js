import React from 'react';
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Form,
  Image,
  Button,
} from 'react-bootstrap';

// @import Assets
import Logo from '../assets/img/bankera-logo.svg';
import CardGray from '../assets/img/card-gray.svg';
import CardRed from '../assets/img/card-red.svg';
import CardLight from '../assets/img/card-light.svg';
import TermOfUse from '../assets/files/term-of-use.pdf';
const AccountRegistrationForm = () => {
  return (
    <Container className="account-registration no-padding" fluid>
      <Jumbotron className="account-form shadow">
        <Row>
          <Col className="d-flex justify-content-center flex-column">
            <img src={Logo} alt="Bankera Logo" />
            <a href="#home" className="text-center">
              I have an account already
            </a>
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
            <div className="card-select-title">
              <h3>Choose your Debit Card</h3>
            </div>
            <Form.Row className="card-select">
              <Form.Group
                className="d-flex justify-content-center flex-column"
                as={Col}
                controlId="formCardGray"
              >
                <Image src={CardGray} alt="Gray Card" />
                <Form.Check
                  className="text-center"
                  type="radio"
                  value="1"
                  name="card-selection"
                  checked
                />
              </Form.Group>
              <Form.Group
                className="d-flex justify-content-center flex-column"
                as={Col}
                controlId="formCardRed"
              >
                <Image src={CardRed} alt="Red Card" />
                <Form.Check
                  className="text-center"
                  type="radio"
                  value="2"
                  name="card-selection"
                />
              </Form.Group>
              <Form.Group
                className="d-flex justify-content-center flex-column"
                as={Col}
                controlId="formCardLight"
              >
                <Image src={CardLight} alt="Light Card" />
                <Form.Check
                  className="text-center"
                  type="radio"
                  value="3"
                  name="card-selection"
                />
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
              <div className="term-of-use">
                <h5>Terms and Conditions</h5>
                <embed src={TermOfUse} />
              </div>
              <Form.Check
                type="checkbox"
                label="I agree to Bankera, Inc Terms of Use and Conditions."
                required
              />
            </Form.Row>
            <Form.Row>
              <Col className="registration-submit d-flex justify-content-center">
                <Button variant="dark" type="submit" size="lg">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>
    </Container>
  );
};

export default AccountRegistrationForm;