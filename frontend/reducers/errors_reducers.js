import { combineReducers } from 'redux';
import { sessionErrorReducer }  from './session_errors_reducer';

import { userErrorsReducer } from './user_errors_reducer';

import { imageErrorsReducer } from './image_errors_reducer';

export default combineReducers({
  session: sessionErrorReducer,
  images: imageErrorsReducer,
  user: userErrorsReducer
});
