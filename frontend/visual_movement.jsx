import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';
import { fetchImages } from './utils/image_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser){
    preloadedState = {
      session:{
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});


window.fetchImages = fetchImages;
