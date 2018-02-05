import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

  }


  render () {
    const display = this.props.currentUser ? (
      <div className="user-logged-in">
        <Link to="/feed" className="navbarfeed">Feed</Link>
        <Link to={`/users/${this.props.currentUser.id}`} className="currentUser">{this.props.currentUser.username}</Link>
        <button className="logout-btn" onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div className="left-side-buttons">
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Sign In</Link>
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
