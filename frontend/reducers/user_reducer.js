import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_IMAGES,
  RECEIVE_IMAGE
} from '../actions/image_actions';



export const userReducer = (state = {}, action) => {
  Object.freeze(state);

  let user;
  switch(action.type){

    case RECEIVE_USER:
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
