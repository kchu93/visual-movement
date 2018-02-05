import * as APIUtil from '../utils/users_api_util.js';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";




export const receiveUser = ({ user, images }) => {
  return ({
    type: RECEIVE_USER,
    user,
    images
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});


export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id).then(user =>
    dispatch(receiveUser(user)),err => (dispatch(receiveErrors(err.responseJSON))))
);
