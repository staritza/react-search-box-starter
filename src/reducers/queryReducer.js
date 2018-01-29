import { types } from '../actions.js';

const initialState = "";
const query = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_QUERY:
      return action.query;
    default:
      return initialState;
  }
};

export default query;