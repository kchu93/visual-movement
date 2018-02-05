import * as APIUtil from '../utils/follow_api_util.js';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOW_ERRORS = "RECEIVE_FOLLOW_ERRORS";

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

const removeFollow = followId => ({
  type: REMOVE_FOLOW,
  followId
});

const receiveFollowErrors = follow => ({
  type: RECEIVE_FOLLOW_ERRORS,
  follow
});



export const createFollow = (followee_id) => dispatch => (
  APIUtil.createFollow(followee_id).then(follow => dispatch(receiveFollow(follow)), err => (dispatch(receiveFollowErrors(err.responseJSON))))
);

export const deleteFollow = followId => dispatch => (
  APIUtil.deleteFollow(followId).then(follow => dispatch(removeFollow(follow)), err => (dispatch(receiveFollowErrors(err.responseJSON))))
);
