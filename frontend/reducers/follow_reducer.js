import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions';

export const followReducer = (state = {}, action) => {
  Object.freeze(state);
  let follows = "follows";
  let newState = merge({}, state);
  switch(action.type){

    case RECEIVE_USER:
      return merge({}, state, {[follows]: action.follows});

    default:
      return state;
  }
};
