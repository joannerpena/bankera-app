import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const TransactionItem = ({
  transaction: {
    transaction_title,
    transaction_type,
    transaction_date,
    transaction_amount,
  },
}) => (
  <tr>
    <td>
      <Moment format="MM/DD/YYYY">{transaction_date}</Moment>
    </td>
    <td>{transaction_title}</td>
    <td>{transaction_type}</td>
    <td>${transaction_amount}</td>
  </tr>
);

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default TransactionItem;
