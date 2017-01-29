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

export function changeDay(direction) {
  return {
    type: types.CHANGE_DAY,
    payload: direction,
  };
}

export function changeTraveler(direction, template) {
  return {
    type: types.CHANGE_TRAVELER,
    payload: direction,
    template: template,
  };
}

export function sendData() {
  const request = axios.post('https://echo.htmlacademy.ru/adaptive?').then(response => {
    console.log(response)
  })

  return {
    type: types.SEND_DATA,
    payload: request,
  };
}