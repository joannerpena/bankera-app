import Axios from 'axios';

// @import Actions
import { setAlert } from './alert';

// @import Redux
import { TRANSACTION_ERROR, GET_TRANSACTIONS } from './types';

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
