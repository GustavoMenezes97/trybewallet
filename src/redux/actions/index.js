import exchangesAPI from '../../API/exchangeAPI';

export const ADD_EMAIL = 'ADD_EMAIL';
export const RECEIVE_COINS = 'RECEIVE_COIN';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';

export const addEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});

export const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload,
});

export const receiveExpenses = (payload) => ({
  type: RECEIVE_EXPENSES,
  payload,
});

export function fetchCoins() {
  return async (dispatch) => {
    const data = await exchangesAPI();
    return dispatch(receiveCoins(Object.keys(data)));
  };
}
