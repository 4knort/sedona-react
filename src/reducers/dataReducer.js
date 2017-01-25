import * as types from 'constants/actionTypes';

const initialState = {
  articles: [],
};

export default function data(state = initialState, action) {
  switch(action.type) {
    case types.SET_ARTICLES: {
      return {
        ...state,
        articles: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}