import { RECEIVE_COINS, RECEIVE_EXPENSES } from '../actions';

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
  case RECEIVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload }],
    };
  default:
    return state;
  }
}
