import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link className="btn btn-light btn-lg" to="/personal">
                Learn More
              </Link>
              <Link className="btn btn-outline-light btn-lg" to="/register">
                Get It Now
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default ImageFluid;
