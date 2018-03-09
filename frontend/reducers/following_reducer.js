import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions';



export const followingReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){

    case RECEIVE_USER:
      return merge({}, state, action.following_images);

    default:
      return state;
  }
};
