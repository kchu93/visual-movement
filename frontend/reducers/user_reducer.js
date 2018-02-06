import merge from 'lodash/merge';

// RECEIVE_IMAGES: used for setting fetchImages(index) all user information into the right key

import {
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_IMAGES,
  RECEIVE_IMAGE
} from '../actions/image_actions';

import {
  RECEIVE_FOLLOW
} from '../actions/follow_actions';



export const userReducer = (state = {}, action) => {
  Object.freeze(state);

  let user;
  switch(action.type){
    case RECEIVE_USER:
    case RECEIVE_IMAGE:
    case RECEIVE_FOLLOW:
      user = {};
      user[action.user.id] = action.user;
      return merge({}, state, user);

    case RECEIVE_IMAGES:
      const newState = merge({},state,action.users);
      return newState;

    default:
      return state;
  }
};
