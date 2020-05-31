import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

// @import Assets
import Card from '../assets/img/card.svg';

const CardInfoSection = () => {
  return (
    <div className="card-personal-section">
      <Row>
        <Col lg={4}>
          <img src={Card} alt="Card" />
        </Col>
        <Col className="card-section-info" lg={8}>
          <h2>Banking Made Easy</h2>
          <p>
            Unlimited check writing, $0 minimum opening deposit required & over
            60,000 fee-free ATMs in the US.
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
