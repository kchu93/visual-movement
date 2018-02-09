import React from 'react';
import {
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH_RESULTS
} from '../actions/search_actions';


export const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_SEARCH_RESULTS:
      let newState = action.results;
      return newState;

    case CLEAR_SEARCH_RESULTS:
      return {};

    default:
      return state;
  }
};
