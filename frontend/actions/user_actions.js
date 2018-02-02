import * as APIUtil from '../utils/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";



export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
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
