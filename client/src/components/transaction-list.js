import React, { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

// @import Redux
import { connect } from 'react-redux';
import { getTransactions } from '../actions/transactions';

// @import Component
import TransactionItem from './transaction-item';
const TransactionList = ({
  getTransactions,
  transaction: { transactions },
}) => {
  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

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
            {transactions.map((transaction) => (
              <TransactionItem transaction={transaction} />
            ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

TransactionList.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  transaction: state.transaction,
});

export default connect(mapStateToProps, { getTransactions })(TransactionList);
