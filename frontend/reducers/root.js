import {combineReducers} from 'redux';
import { sessionReducer } from './session_reducer';
import errorsReducer from './errors_reducers';
import { imageReducer } from './image_reducer';


export default combineReducers({
  session: sessionReducer,
  images: imageReducer,
  errors: errorsReducer
});