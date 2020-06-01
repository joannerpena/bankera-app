import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DashboardFooter = () => {
  return (
    <footer>
      <Row>
        <Col className="d-flex justify-content-center">
          <small>©2020 Bankera, Inc. All rights reserved.</small>
        </Col>
      </Row>
    </footer>
  );
};

export default DashboardFooter;
