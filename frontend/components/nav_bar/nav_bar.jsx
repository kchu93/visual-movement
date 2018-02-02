import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({currentUser, logout }) => {
  const display = currentUser ? (
    <div className="user-logged-in">
      <Link to="/feed" className="navbarfeed">FEED</Link>
      <Link to="/feed"className="currentUser">{currentUser.username}</Link>
      <button className="logout-btn" onClick={logout}>LOGOUT</button>
    </div>
  ) : (
    <div className="left-side-buttons">
      <Link className="btn" to="/signup">SIGN UP</Link>
      <Link className="btn" to="/login">SIGN IN</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo-container">
        <Link className="logo-text" to="/"><img src="https://i.imgur.com/YZNoZhp.png"></img></Link>
      </h1>
      <div className="left-content">
        {display}
      </div>
    </header>
  );
};
