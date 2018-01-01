import { UPDATE_LOGIN_STATUS, UPDATE_LOGOUT_STATUS } from './constants';

export const loginAction = () => ({
  type: UPDATE_LOGIN_STATUS,
});

export const logoutAction = () => ({
  type: UPDATE_LOGOUT_STATUS,
});