// import update from 'react-addons-update';
import { FETCH_SUBJECTS_SUCCESS } from './subjects.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS_SUCCESS:
      return action.payload.response.data;
    default:
      return state;
  }
};
