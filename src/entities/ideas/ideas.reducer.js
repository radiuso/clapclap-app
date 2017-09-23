// import update from 'react-addons-update';
import { FETCH_IDEAS_SUCCESS } from './ideas.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IDEAS_SUCCESS:
      return action.payload.response.data;
    default:
      return state;
  }
};
