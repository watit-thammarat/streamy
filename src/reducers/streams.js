import _ from 'lodash';

import {
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
  CREATE_STREAM
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, 'id') };
    case DELETE_STREAM:
      return _.omit(state, [payload]);
    default:
      return state;
  }
};
