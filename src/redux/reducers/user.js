import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
