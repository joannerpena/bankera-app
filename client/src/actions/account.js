import Axios from 'axios';
import {
  GET_ACCOUNT,
  CREATE_ACCOUNT,
  ACCOUNT_ERROR,
  CLEAR_ACCOUNT,
  DELETED_ACCOUNT,
  ADDED_AMOUNT,
} from './types';
import { setAlert } from './alert';

// Get Current Profile
export const getCurrentAccount = () => async (dispatch) => {
  try {
    const res = await Axios.get('/api/account/me');
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// New Account Registration
export const registerAccount = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await Axios.post('/api/account', formData, config);

    dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data,
    });

    if (!edit) {
      history.push('/dashboard');
    }

    dispatch(setAlert(edit ? 'Account Updated' : 'Account Created', 'success'));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// Delete Account and User
export const deleteAccount = () => async (dispatch) => {
  if (
    window.confirm(
      'Are you sure you want to delete your account and user? This can NOT be undone'
    )
  ) {
    try {
      const res = await Axios.delete('/api/account');
      dispatch({
        type: CLEAR_ACCOUNT,
      });
      dispatch({
        type: DELETED_ACCOUNT,
      });
      dispatch(setAlert('Account and User were deleted'));
    } catch (error) {
      dispatch({
        type: ACCOUNT_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  }
};

// Add Amount to Account
export const addAmountAccount = (amount) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await Axios.put('/api/account', amount, config);

    dispatch({
      type: ADDED_AMOUNT,
      payload: res.data,
    });
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ACCOUNT_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
