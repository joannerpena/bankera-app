import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';

const PersonalAccountInfo = () => {
  return (
    <Jumbotron className="account-info">
      <hr className="jumbotron-top-line"></hr>
      <Jumbotron className="inner-light-jumbotron">
        <h3>Bankera Essential Package</h3>
        <hr className="jumbotron-undertitle-line"></hr>
        <Row>
          <Col className="jumbotron-col1">
            <h4>Full-feature relationship banking:</h4>
            <p>Ability to earn Bankera ThankYou Rewards Points.</p>
            <p>
              No Bankera fee for using non-bankers ATMs when monthly balance
              requirements are met.
            </p>
            <p>Option to earn interest on your checking account balance.</p>
            <p>
              Potential to earn higher rates on savings and money market
              accounts.
            </p>
          </Col>
          <div className="vl"></div>
          <Col className="jumbotron-col2">
            <h4>No monthly maintenance fee:</h4>
            <p>
              No need to maintain an average monthly balance to get rid of your
              monthly maintenance fee. Bankera does not charge you for monthly
              fees.
            </p>
          </Col>
        </Row>
      </Jumbotron>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link className="btn btn-dark btn-lg" to="/register">
            Apply Now
          </Link>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default PersonalAccountInfo;
