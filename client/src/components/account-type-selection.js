import React from 'react';
import { Jumbotron, Card, Row, Col, Button } from 'react-bootstrap';

const AccountTypeSelection = () => {
  return (
    <div className="new-account-selection">
      <Jumbotron className="new-account-image text-center">
        <h1>Let’s Get this Started</h1>
      </Jumbotron>
      <Card body>
        <Row>
          <Col className="d-flex justify-content-start">
            <h4>Bankera Essential Package</h4>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card.Text>
              Unlimited check writing, $0 minimum opening deposit required &
              over 60,000 fee-free ATMs in the US.
            </Card.Text>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button variant="dark" size="lg">
              Get It Now
            </Button>
          </Col>
        </Row>
      </Card>
      <Card body>
        <Row>
          <Col className="d-flex justify-content-start">
            <h4>Bankera Business Package</h4>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card.Text>
              Take advantage of streamlined checking tailored to your business.
              Bankera offers the right online checking accounts to help simplify
              your day-to-day banking.
            </Card.Text>
          </Col>
          <Col className="account-button d-flex justify-content-end">
            <Button variant="dark" size="lg">
              Get It Now
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AccountTypeSelection;
