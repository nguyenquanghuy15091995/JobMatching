import React from 'react';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import {loadUserData} from './app/reducer';

const reducers = combineReducers({
  user: loadUserData,
  form: formReducer,
});

export default reducers;