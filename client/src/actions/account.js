import Axios from 'axios';
import { GET_ACCOUNT, CREATE_ACCOUNT, ACCOUNT_ERROR } from './types';
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

    dispatch(setAlert(edit ? 'Account Updated' : 'Account Created'));
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
