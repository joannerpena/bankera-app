import React, { Fragment, useState } from 'react';
import { Jumbotron, Row, Col, Button, Modal } from 'react-bootstrap';

// @import Modal
import ModalTransaction from './modals/ModalTransaction';

const AccountWidget = ({ amount, accountNumber }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Jumbotron className="account-widget shadow">
      <Fragment>
        <Modal show={show} onHide={handleClose}>
          <ModalTransaction />
        </Modal>
      </Fragment>
      <Row className="widget-title d-flex justify-content-start">
        <Col className="d-flex flex-row">
          <h2 className="d-flex flex-column">
            Account Summary <span>Account number: {accountNumber}</span>
          </h2>
          <Button variant="light" onClick={handleShow}>
            + Add Transaction
          </Button>
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
