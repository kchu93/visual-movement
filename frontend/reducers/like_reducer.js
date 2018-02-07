import merge from 'lodash/merge';
import {
  RECEIVE_USER
} from '../actions/user_actions';


export const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let liked = "liked";
  switch(action.type){

  case RECEIVE_USER:
    return merge({}, action.likes);

  default:
    return state;
  }
};
