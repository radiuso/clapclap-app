import update from 'react-addons-update';
import { LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT } from './auth.types';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return update(state, {
        isLoading: { $set: true },
      });
    case LOGIN_SUCCESS:
      return update(state, {
        isLoading: { $set: false },
        isAuthenticated: { $set: true },
        user: {
          $set: {
            username: 'test',
          },
        },
      });
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
