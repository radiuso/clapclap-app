import store from '../../store';
import subjectsService from './subjects.service';

import { FETCH_SUBJECTS_SUCCESS, FETCH_SUBJECTS_ERROR } from './subjects.types';

export function fetchAll() {
  store.dispatchAsync(subjectsService.fetchAll(), {
    success: FETCH_SUBJECTS_SUCCESS,
    failure: FETCH_SUBJECTS_ERROR,
  });
}

export default {
  fetchAll,
};
