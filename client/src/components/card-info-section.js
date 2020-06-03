import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="btn btn-dark btn-lg" to="/register">
            Apply Now
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CardInfoSection;
