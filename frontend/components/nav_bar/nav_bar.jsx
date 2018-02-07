import React from 'react';
import { Link } from 'react-router-dom';


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
        <Link to="/feed" className="nav-bar-links">Feed</Link>
        <Link to={`/users/${this.props.currentUser.id}`} className="nav-bar-links">{this.props.currentUser.username}</Link>
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

// export const NavBar = ({currentUser, logout }) => {
//   const display = currentUser ? (
//     <div className="user-logged-in">
//       <Link to="/feed" className="navbarfeed">FEED</Link>
//       <Link to={`/users/${currentUser.id}`} className="currentUser">{currentUser.username}</Link>
//       <button className="logout-btn" onClick={logout}>LOGOUT</button>
//     </div>
//   ) : (
//     <div className="left-side-buttons">
//       <Link className="btn" to="/signup">SIGN UP</Link>
//       <Link className="btn" to="/login">SIGN IN</Link>
//     </div>
//   );
//
//   return (
//     <header className="nav-bar">
//       <h1 className="logo-container">
//         <Link className="logo-text" to="/"><img src="https://i.imgur.com/YZNoZhp.png"></img></Link>
//       </h1>
//       <div className="left-content">
//         {display}
//       </div>
//     </header>
//   );
// };
