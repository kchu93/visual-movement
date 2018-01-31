import React from 'react';
import ReactDOM from 'react-dom';
import { postUser, signUp, logout } from './utils/session_api_util';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<Root store={store} />, root);
});


window.postUser = postUser;
window.signUp = signUp;
window.logout = logout;
