import React from 'react';
import {Provider} from 'react-redux';
import SignupContainer from './session/signup_container';
import {
  Route,
  Link,
  Redirect,
  Switch,
  HashRouter
 } from 'react-router-dom';

export default () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Visual Movement</h1>
      </Link>
    </header>
    <Switch>
      <Route path="/signup" component={SignupContainer} />
    </Switch>
  </div>
);
