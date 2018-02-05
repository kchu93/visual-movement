import React from 'react';
import {Provider} from 'react-redux';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomePage from './homepage/homepage';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import ImageItemContainer from './images/image_item_container';

// import Footer from './footer/footer';
import {
  Route,
  Link,
  Redirect,
  Switch
 } from 'react-router-dom';
 import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={HomePage} />
      <Route path="/users/:userId" component={ProfileContainer} />
      <Route path="/images/:imageId" component={ImageItemContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/feed" component={FeedContainer} />
    </Switch>
  </div>
);
