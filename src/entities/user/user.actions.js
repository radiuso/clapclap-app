import store from '../../store';
import userService from './user.service';

import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './user.types';

export function fetchUsers() {
  store.dispatchAsync(userService.fetchUsers(), {
    success: FETCH_USERS_SUCCESS,
    failure: FETCH_USERS_ERROR,
  });
}

export default {
  fetchUsers,
};
