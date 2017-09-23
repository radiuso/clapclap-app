import store from '../../store';
import ideasService from './ideas.service';

import { FETCH_IDEAS_SUCCESS, FETCH_IDEAS_ERROR } from './ideas.types';

export function fetchAll() {
  store.dispatchAsync(ideasService.fetchAll(), {
    success: FETCH_IDEAS_SUCCESS,
    failure: FETCH_IDEAS_ERROR,
  });
}

export default {
  fetchAll,
};
