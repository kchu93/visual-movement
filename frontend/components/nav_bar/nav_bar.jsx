import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.logout().then(this.props.history.push('/'));
  }


  render () {
    const display = this.props.currentUser ? (
      <div className="nav-bar-right-side">

        <NavLink
          exact
          to="/explore"
          className="nav-bar-links"
          activeClassName="nav-bar-active">
          Explore
        </NavLink>

        <NavLink
          exact
          to="/feed"
          className="nav-bar-links"
          activeClassName="nav-bar-active">
          Feed
        </NavLink>

        <NavLink
          exact
          to="/upload"
          className="nav-bar-links"
          activeClassName="nav-bar-active">
          Upload
        </NavLink>

        <NavLink
          exact
          to={`/users/${this.props.currentUser.id}`}
          className="nav-bar-links"
          activeClassName="nav-bar-active">
          {this.props.currentUser.username}
        </NavLink>

        <button className="logout-btn" onClick={this.handleClick}>Logout</button>

      </div>
    ) : (
      <div className="nav-bar-right-side-session">
        <NavLink
          exact
          className="nav-bar-links"
          activeClassName="nav-bar-active"
          to="/signup">
          Sign Up
        </NavLink>

        <NavLink
          exact
          className="nav-bar-links"
          activeClassName="nav-bar-active"
          to="/login">
          Sign In
        </NavLink>
      </div>
    );

    return (
      <div className="nav-bar">
        <div className="nav-bar-left-side">

          <Link
            to="/">
            <img className="nav-bar-logo" src="https://i.imgur.com/pV7SJQf.png"></img>
          </Link>
          <NavLink
            exact
            to="/search">
            <i className="fas fa-search nav-bar-icons"></i>
          </NavLink>

        </div>
        <div className="left-content">
          {display}
        </div>
      </div>
    );
  }
}

export default NavBar;
