import * as types from 'constants/actionTypes';

const initialState = {
  articles: [],
  pageArticles: [],
  days: 0,
  travelersCount: 0,
  travelers: [],
};

export default function data(state = initialState, action) {
  switch (action.type) {
    case types.SET_ARTICLES: {
      return {
        ...state,
        articles: action.payload.slice(0),
        pageArticles: action.payload.slice(0, 6),
      };
    }
    case types.SET_PAGE: {
      return {
        ...state,
        pageArticles: state.articles.slice(action.from, action.to),
      };
    }
    case types.TAG_SORT: {
      return {
        ...state,
        articles: state.articles.slice(0).filter(
          (item) => {
            if (item.tag.toLowerCase() === action.payload.toLowerCase()) {
              return item;
            }
          }
        ),
        pageArticles: state.articles.slice(0).filter(
          (item) => {
            if (item.tag.toLowerCase() === action.payload.toLowerCase()) {
              return item;
            }
          }
        ).slice(0, 6),
      };
    }
    case types.CHANGE_DAY: {
      if (action.payload === 'minus') {
        return {
          ...state,
          days: state.days - 1,
        };
      } else {
        return {
          ...state,
          days: state.days + 1,
        };
      }
    }
    case types.CHANGE_TRAVELER: {
      if (action.payload === 'minus') {
        return {
          ...state,
          travelersCount: state.travelersCount - 1,
        };
      } else {
        return {
          ...state,
          travelersCount: state.travelersCount + 1,
          travelers: state.travelers.slice(0).push(action.template),
        };
      }
    }
    default: {
      return state;
    }
  }
}

