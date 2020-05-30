import React from 'react';
import { Jumbotron, Button, Row, Col } from 'react-bootstrap';

// @import Assets
import Tweet from '../assets/img/twitter-feed.svg';

const ImageContainer = () => {
  return (
    <Jumbotron className="image-container mt-1">
      <Row>
        <Col lg={6}>
          <h1>Come to the bank that really cares about your money</h1>
          <p>
            As a new Bankera customer, when you open a Bankera Essential
            Checking account with qualifying activities.
          </p>
          <Row>
            <Col>
              <Button variant="light" size="lg">
                Learn More
              </Button>
              <Button variant="outline-light" size="lg">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-end">
          <img className="tweet float-left" src={Tweet} alt="twitter-feed" />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default ImageContainer;
