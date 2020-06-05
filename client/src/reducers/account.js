import {
  GET_ACCOUNT,
  ACCOUNT_ERROR,
  CREATE_ACCOUNT,
  CLEAR_ACCOUNT,
  ADDED_AMOUNT,
} from '../actions/types';

const initialState = {
  account: null,
  loading: true,
  hasAccount: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACCOUNT:
    case CREATE_ACCOUNT:
    case ADDED_AMOUNT:
      return {
        ...state,
        account: payload,
        hasAccount: true,
        loading: false,
      };

    case ACCOUNT_ERROR:
      return {
        ...state,
        account: null,
        error: payload,
        hasAccount: false,
        loading: false,
      };

    case CLEAR_ACCOUNT:
      return {
        ...state,
        account: null,
        loading: false,
        hasAccount: false,
      };

    default:
      return state;
  }
}
