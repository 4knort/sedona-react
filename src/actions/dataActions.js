import axios from 'axios';
import * as types from 'constants/actionTypes';

function setArticles(data) {
  return {
    type: types.SET_ARTICLES,
    payload: data,
  };
}

export function fetchArticles() {
  return function thunkFetch(dispatch) {
    axios.get('./articles.json').then(response => {
      dispatch(setArticles(response.data));
    });
  };
}

export function articleSetPage(from, to) {
  return {
    type: types.SET_PAGE,
    from,
    to,
  }
}
export function tagSort(tag) {
  return {
    type: types.TAG_SORT,
    payload: tag,
  }
}