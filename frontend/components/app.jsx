import React from 'react';
import {Provider} from 'react-redux';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import HomePage from './homepage/homepage';
import ExploreContainer from './explore/explore_container';
import ProfileContainer from './profile/profile_container';
import ImageItemContainer from './images/image_item_container';
import LikesTabContainer from './profile/likes_tab_container';
import ImageForm from './forms/image_form_container';
import ImageEdit from './forms/image_edit_container';
import SearchContainer from './search/search_container';
import Footer from './footer/footer';
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
      <Route exact path="/" component={HomePage} />
      <Route exact path="/users/:userId/likes" component={LikesTabContainer} />
      <Route exact path="/users/:userId" component={ProfileContainer} />
      <Route path="/images/:imageId/update" component={ImageEdit} />
      <Route path="/images/:imageId" component={ImageItemContainer} />
      <Route path="/search" component={SearchContainer} />
      <Route path="/upload" component={ImageForm} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/explore" component={ExploreContainer} />
    </Switch>
  </div>
);
