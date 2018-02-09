import * as APIUtil from '../utils/image_api_util';


export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REMOVE_IMAGE = "DELETE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";


const receiveImages = ({images, users, followings}) => ({
  type: RECEIVE_IMAGES,
  images,
  users,
  followings
});

const receiveImage = ({image, user}) => ({
  type: RECEIVE_IMAGE,
  image,
  user
});

const removeImage = imageId => ({
  type: REMOVE_IMAGE,
  imageId
});

const receiveImageErrors = errors => ({
  type: RECEIVE_IMAGE_ERRORS,
  errors
});

export const clearImageErrors =  () => dispatch => (
   dispatch(receiveImageErrors([]))
);




export const fetchImages = () => dispatch => (
  APIUtil.fetchImages().then(images => dispatch(receiveImages(images)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const fetchImage = formImage => dispatch => (
  APIUtil.fetchImage(formImage).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const createImage = (formImage, callback) => dispatch => (
  APIUtil.createImage(formImage, callback).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);



export const updateImage = formImage => dispatch => (
  APIUtil.updateImage(formImage).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const deleteImage = imageId => dispatch => (
  APIUtil.deleteImage(imageId).then(imageId => dispatch(removeImage(imageId)))
);


export const createLike = imageId => dispatch => (
  APIUtil.createLike(imageId).then(image => dispatch(receiveImage(image)))
);

export const deleteLike = imageId => dispatch => (
  APIUtil.deleteLike(imageId).then(image => dispatch(receiveImage(image)))
);
