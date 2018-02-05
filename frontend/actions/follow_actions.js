import * as APIUtil from '../utils/follow_api_util.js';


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLOW,
  follow
});

export const receiveFollowErrors = follow => ({
  type: RECEIVE_FOLLOW_ERRORS,
  follow
});



export const followUser = (follow) => dispatch => (
  APIUtil.createFollow(follow).then(user => dispatch(receiveFollow(user)), err => (dispatch(receiveFollowErrors(err.responseJSON))))
);

export const unfollowUser = follow => dispatch => (
  APIUtil.deleteFollow(follow).then(user => dispatch(removeFollow(user)), err => (dispatch(receiveFollowErrors(err.responseJSON))))
);
