import merge from 'lodash/merge';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLOW
} from  '../actions/follow_actions';

export const followReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_FOLLOW:
      return merge({}, state, action.follow);

    case REMOVE_FOLOW:
      let newState = merge({}, state);
      delete newState[action.followId];
      return newState;

    default:
      return state;
  }
};
