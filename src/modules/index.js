import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import data from '../reducers/dataReducer';

export default combineReducers({ routing, data });
