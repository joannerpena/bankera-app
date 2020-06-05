import React, { Fragment, useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

// @import Redux
import { connect } from 'react-redux';
import { addTransaction } from '../../actions/transactions';
import { addAmountAccount } from '../../actions/account';
import { setAlert } from '../../actions/alert';

const ModalTransaction = ({
  addTransaction,
  addAmountAccount,
  account: { account },
  setAlert,
}) => {
  const [formData, setFormData] = useState({
    transaction_title: '',
    transaction_amount: '',
    transaction_type: '',
  });

  const { transaction_title, transaction_amount, transaction_type } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      parseInt(formData.transaction_amount) >
        parseInt(account.amount_in_account) &&
      formData.transaction_type != 'Deposit'
    ) {
      setAlert('You dont have enough balance', 'danger');
    } else {
      addTransaction(formData);
      if (formData.transaction_type === 'Deposit') {
        const newAmount =
          parseInt(formData.transaction_amount) +
          parseInt(account.amount_in_account);

        console.log(newAmount);
        const sendAmount = {
          amount: newAmount,
        };

        console.log(sendAmount);
        addAmountAccount(sendAmount);
      } else {
        const newAmount =
          parseInt(account.amount_in_account) -
          parseInt(formData.transaction_amount);
        console.log(newAmount);
        const sendAmount = {
          amount: newAmount,
        };

        console.log(sendAmount);
        addAmountAccount(sendAmount);
      }
    }
  };

  return (
    <Fragment>
      <Modal.Header closeButton>
        <Modal.Title>Create Transaction</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Description"
              name="transaction_title"
              value={transaction_title}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              name="transaction_type"
              value={transaction_type}
              onChange={(e) => onChange(e)}
              placeholder="Categories"
            >
              <option value="">Categories</option>
              <option value="Groceries">Groceries</option>
              <option value="CoffeeBreak">CoffeeBreak</option>
              <option value="Commute">Commute</option>
              <option value="Health">Health</option>
              <option value="Personal">Personal</option>
              <option value="Bills">Bills</option>
              <option value="Deposit">Deposit</option>
              <option value="Withdraw">Withdraw</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder="$0"
              name="transaction_amount"
              value={transaction_amount}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" size="lg" block>
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Fragment>
  );
};

ModalTransaction.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  addAmountAccount: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  account: state.account,
});

export default connect(mapStateToProps, {
  addTransaction,
  addAmountAccount,
  setAlert,
})(ModalTransaction);
