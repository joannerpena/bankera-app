import React from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

const AccountWidget = () => {
  return (
    <Jumbotron className="account-widget shadow">
      <Row className="widget-title d-flex justify-content-start">
        <Col className="d-flex flex-row">
          <h2>Account Summary</h2>
          <Button variant="light">+ Add Transaction</Button>
        </Col>
      </Row>
      <Row className="widget-account-total">
        <Col lg={2}>
          <p className="total-type">Total Balance</p>
          <p className="widget-amount">$3,000</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Net Worth</p>
          <p className="widget-amount">$2,300</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Earnings</p>
          <p className="widget-amount">$2,300</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Spending</p>
          <p className="widget-amount">$800</p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default AccountWidget;
