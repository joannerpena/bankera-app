import React from 'react';
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

const AccountWidget = ({ amount, accountNumber }) => {
  return (
    <Jumbotron className="account-widget shadow">
      <Row className="widget-title d-flex justify-content-start">
        <Col className="d-flex flex-row">
          <h2 className="d-flex flex-column">
            Account Summary <span>Account number: {accountNumber}</span>
          </h2>
          <Button variant="light">+ Add Transaction</Button>
        </Col>
      </Row>
      <Row className="widget-account-total">
        <Col lg={2}>
          <p className="total-type">Total Balance</p>
          <p className="widget-amount">${amount}</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Net Worth</p>
          <p className="widget-amount">$0</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Earnings</p>
          <p className="widget-amount">$0</p>
        </Col>
        <Col lg={2}>
          <p className="total-type">Total Spending</p>
          <p className="widget-amount">$0</p>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default AccountWidget;
