import React from 'react';
import { Link, NavLink } from 'react-router-dom';



class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.logout().then(() => this.props.history.push('/'));
  }


  render () {
    const display = this.props.currentUser ? (
      <div className="nav-bar-right-side">

        <NavLink
          to="/feed"
          className="nav-bar-links"
          activeClassName="profile-tab-active">
          Feed
        </NavLink>

        <NavLink
          to="/upload"
          className="nav-bar-links"
          activeClassName="profile-tab-active">
          Upload
        </NavLink>

        <NavLink
          to={`/users/${this.props.currentUser.id}`}
          className="nav-bar-links"
          activeClassName="profile-tab-active">
          {this.props.currentUser.username}
        </NavLink>

        <button className="logout-btn" onClick={this.handleClick}>Logout</button>

      </div>
    ) : (
      <div className="nav-bar-right-side">
        <Link className="nav-bar-links" to="/signup">Sign Up</Link>
        <Link className="nav-bar-links" to="/login">Sign In</Link>
      </div>
    );

    return (
      <div className="nav-bar">
        <div className="nav-bar-left-side">
          <Link to="/"><img src="https://i.imgur.com/P4gUDii.png"></img></Link>
        </div>
        <div className="left-content">
          {display}
        </div>
      </div>
    );
  }
}

export default NavBar;
