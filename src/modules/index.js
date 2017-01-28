import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import data from '../reducers/dataReducer.js';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ routing, data, form: formReducer, });
