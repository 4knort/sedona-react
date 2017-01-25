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