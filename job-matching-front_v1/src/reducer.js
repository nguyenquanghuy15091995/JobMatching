import React from 'react';
import {combineReducers} from 'redux';

import {loadUserData} from './app/reducer';

const reducers = combineReducers({
  user: loadUserData
});

export default reducers;