import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({currentUser, logout }) => {
  const display = currentUser ? (
    <div className="user-logged-in">
      <h3>{currentUser.username}</h3>
      <button className="btn" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">SIGN UP</Link>
      <Link className="btn" to="/login">SIGN IN</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo-container">
        <Link className="logo-text" to="/">Visual Movement</Link>
      </h1>
      <div className="left-content">
        {display}
      </div>
    </header>
  );
};
