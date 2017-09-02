// import update from 'react-addons-update';
import { FETCH_USERS_SUCCESS } from './user.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload.response.data;
    default:
      return state;
  }
};
