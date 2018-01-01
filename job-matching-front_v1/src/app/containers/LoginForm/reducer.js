import { UPDATE_LOGIN_STATUS, UPDATE_LOGOUT_STATUS } from './constants';

export const loginReducer = (state = false, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      return true;
    case UPDATE_LOGOUT_STATUS:
      return false;
    default:
      return state;
  }
}