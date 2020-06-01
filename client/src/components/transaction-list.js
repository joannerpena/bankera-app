import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const TransactionList = () => {
  return (
    <div>
      <Row className="transactions-list">
        <Col>
          <h3>Transactions</h3>
        </Col>
      </Row>
      <Row className="transaction-table shadow">
        <Table bordered hover variant="light" size="lg">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default TransactionList;
