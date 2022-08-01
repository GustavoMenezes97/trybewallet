import { RECEIVE_COINS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_COINS:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}
