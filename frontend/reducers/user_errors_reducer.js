import merge from 'lodash/merge';

import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';



export const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return action.errors;

    case RECEIVE_USER:
      return null;

    default:
      return state;
  }
};
