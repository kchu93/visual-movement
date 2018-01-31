import React from 'react';
import {Provider} from 'react-redux';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import {
  Route,
  Link,
  Redirect,
  Switch
 } from 'react-router-dom';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);
