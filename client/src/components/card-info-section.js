import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// @import Assets
import Cards from '../assets/img/card-group.svg';

const CardInfoSection = () => {
  return (
    <div className="card-section">
      <Row>
        <Col lg={5}>
          <img src={Cards} alt="Card Group" />
        </Col>
        <Col className="card-section-info" lg={7}>
          <h2>
            Bankera savings tools will help you achieve that financial goal you
            always wanted
          </h2>
          <p>
            As a new Bankera customer, when you open a Bankera Essential
            Checking account with qualifying activities.
          </p>
          <Button variant="dark" size="lg">
            Apply Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CardInfoSection;
