import * as types from 'constants/actionTypes';

const initialState = {
  articles: [],
  pageArticles: [],
};

export default function data(state = initialState, action) {
  switch(action.type) {
    case types.SET_ARTICLES: {
      return {
        ...state,
        articles: action.payload.slice(0),
        pageArticles: action.payload.slice(0, 6)
      };
    }
    case types.SET_PAGE: {
      return {
        ...state,
        pageArticles: state.articles.slice(action.from, action.to),
      };
    }
    default: {
      return state;
    }
  }
}