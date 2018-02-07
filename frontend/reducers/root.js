import {combineReducers} from 'redux';
import { sessionReducer } from './session_reducer';
import { imageReducer } from './image_reducer';
import { userReducer } from './user_reducer';
import { followReducer } from './follow_reducer';
import { likeReducer } from './like_reducer';
import errorsReducer from './errors_reducers';

export default combineReducers({
  session: sessionReducer,
  users: userReducer,
  images: imageReducer,
  follows: followReducer,
  errors: errorsReducer,
  likes: likeReducer
});
