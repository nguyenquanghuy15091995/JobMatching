import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { loadUserData } from './app/reducer';
import { loginReducer } from './app/containers/LoginForm/reducer';
import { autocompleteReducer, searchResultsReducer } from './app/containers/RecruiterMain/reducer';

const reducers = combineReducers({
  user: loadUserData,
  form: formReducer,
  isLoggedIn: loginReducer,
  autocompletes: autocompleteReducer,
  accountSearchResults: searchResultsReducer,
});

export default reducers;