import store from '../../store';
import authService from './auth.service';

import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from './auth.types';

export function login(info) {
  store.dispatchAsync(authService.login(info), {
    request: LOGIN_PENDING,
    success: LOGIN_SUCCESS,
    failure: LOGIN_ERROR,
  });
}

export function logout() {
  // TODO
  store.dispatch({
    type: LOGOUT,
  });
}

export default {
  login,
  logout,
};
