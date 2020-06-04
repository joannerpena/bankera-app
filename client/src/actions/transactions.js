import Axios from 'axios';

// @import Actions
import { setAlert } from './alert';

// @import Redux
import {
  TRANSACTION_ERROR,
  GET_TRANSACTIONS,
  ADDED_TRANSACTION,
} from './types';

// Get Transactions
export const getTransactions = () => async (dispatch) => {
  try {
    const res = await Axios.get('/api/transaction');

    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TRANSACTION_ERROR,
      error: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// New Transaction
export const addTransaction = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await Axios.post('/api/transaction', formData, config);

    dispatch({
      type: ADDED_TRANSACTION,
      payload: res.data,
    });

    dispatch(setAlert('Transaction Created', 'success'));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: TRANSACTION_ERROR,
      error: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
