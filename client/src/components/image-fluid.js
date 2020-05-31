import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'react-bootstrap';

const ImageFluid = () => {
  return (
    <Jumbotron className="image-fluid" fluid>
      <Row>
        <Col lg={6}>
          <h1>Personal Account with Bankera</h1>
          <p>
            Open a Bankera checking account and enjoy benefits such as mobile
            check deposit, online bill pay, linked accounts and much more.
          </p>
          <Row>
            <Col>
              <Button variant="light" size="lg">
                Learn More
              </Button>
              <Button variant="outline-light" size="lg">
                Get It Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default ImageFluid;
