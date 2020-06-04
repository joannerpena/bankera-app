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
        <Table bordered hover variant="light" size="lg" className="text-center">
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
              <td>02/05/2020</td>
              <td>Starbucks Coffee</td>
              <td>CoffeeBreak</td>
              <td>$6.20</td>
            </tr>
            <tr>
              <td>02/05/2020</td>
              <td>Uber Drive</td>
              <td>Commute</td>
              <td>$30.23</td>
            </tr>
            <tr>
              <td>02/05/2020</td>
              <td>Panera Bread</td>
              <td>Food</td>
              <td>$50.24</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default TransactionList;
