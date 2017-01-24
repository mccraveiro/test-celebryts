import { SET_PAGE } from '../constants';

const defaultState = {
  current: 1
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        current: action.page
      };
    default:
      return state;
  }
};
