import merge from 'lodash/merge';
import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_action';

import { RECEIVE_IMAGE } from '../actions/image_actions';

export const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let liked = "liked";
  switch(action.type){

  case RECEIVE_LIKE:
    return merge({}, state, action.like);

  case REMOVE_LIKE:
    let newState = merge({}, state);
    delete newState[action.likeId];
    return newState;

  default:
    return state;
  }
};
