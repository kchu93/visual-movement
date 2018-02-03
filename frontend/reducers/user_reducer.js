import merge from 'lodash/merge';

import {
  RECEIVE_USER
} from '../actions/user_actions';




export const userReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, user);

    default:
      return state;
  }
};
