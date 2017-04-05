import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import data from '../reducers/dataReducer';

export default combineReducers({ routing, data, form: formReducer,  });
