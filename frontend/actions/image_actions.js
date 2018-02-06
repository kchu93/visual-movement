import * as APIUtil from '../utils/image_api_util';


export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const REMOVE_IMAGE = "DELETE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";


const receiveImages = ({images, users}) => ({
  type: RECEIVE_IMAGES,
  images,
  users
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



export const fetchImages = () => dispatch => (
  APIUtil.fetchImages().then(images => dispatch(receiveImages(images)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const fetchImage = formImage => dispatch => (
  APIUtil.fetchImage(formImage).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const createImage = formImage => dispatch => (
  APIUtil.createImage(formImage).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const updateImage = formImage => dispatch => (
  APIUtil.updateImage(formImage).then(image => dispatch(receiveImage(image)), err => (dispatch(receiveImageErrors(err.responseJSON))
  ))
);


export const deleteImage = imageId => dispatch => (
  APIUtil.deleteImage(imageId).then(imageId => dispatch(removeImage(imageId)))
);
