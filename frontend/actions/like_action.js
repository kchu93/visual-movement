import * as APIUtil from '../utils/image_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";


const receiveLikes = (likes) => ({
  type: RECEIVE_LIKE,
  likes
});

const removeLike = (likeId) => ({
  type: REMOVE_LIKE,
  likeId
});


export const createLike = imageId => dispatch => (
  APIUtil.createLike(imageId).then(image => dispatch(receiveLikes(image)))
);

export const deleteLike = imageId => dispatch => (
  APIUtil.deleteLike(imageId).then(image => dispatch(removeLike(imageId)))
);
