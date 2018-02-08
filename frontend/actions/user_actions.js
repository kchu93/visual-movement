import * as APIUtil from '../utils/users_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";


export const receiveUser = ({ user, images, follows, likes }) => {
  return ({
    type: RECEIVE_USER,
    user,
    images,
    follows,
    likes
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const clearErrors =  () => dispatch => (
   dispatch(receiveErrors([]))
);

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user =>
    dispatch(receiveUser(user)),err => (dispatch(receiveErrors(err.responseJSON))))
);

export const createFollow = (followed_user) => dispatch => (
  APIUtil.createFollow(followed_user).then(user => dispatch(receiveUser(user)), err => (dispatch(receiveErrors(err.responseJSON))))
);

export const deleteFollow = followId => dispatch => (
  APIUtil.deleteFollow(followId).then(user => dispatch(receiveUser(user)), err => (dispatch(receiveErrors(err.responseJSON))))
);
