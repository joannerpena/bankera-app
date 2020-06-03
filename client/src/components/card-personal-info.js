import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="btn btn-dark btn-lg" to="/register">
            Apply Now
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CardInfoSection;
