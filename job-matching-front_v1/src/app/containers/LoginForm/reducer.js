import { UPDATE_LOGIN_STATUS } from './constants';

export const loginReducer = (state = false, action) => {
  switch(action.type){
    case UPDATE_LOGIN_STATUS:
    return true;
    default:
    return state;
  }
}