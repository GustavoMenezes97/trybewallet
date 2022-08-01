export const ADD_EMAIL = 'ADD_EMAIL';
export const RECEIVE_COINS = 'RECEIVE_COIN';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const addEmail = (payload) => ({
  type: ADD_EMAIL,
  payload,
});

const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload,
});

export function fetchCoins() {
  return async (dispatch) => {
    const response = await fetch(URL);
    const coins = await response.json();
    const coinsFiltered = Object.keys(coins).filter((item) => item !== 'USDT');
    return dispatch(receiveCoins(coinsFiltered));
  };
}
