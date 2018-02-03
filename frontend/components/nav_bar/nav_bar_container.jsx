import React from 'react';
import { connect } from 'react-redux';
import  NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchUser: user => dispatch(fetchUser(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
