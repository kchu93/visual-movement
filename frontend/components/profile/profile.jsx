import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if (this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.userId !== newProps.match.params.userId){
      this.props.fetchUser(newProps.match.params.userId);
    }
  }


  render () {
    if (!this.props.images){
      return null;
    }
    return (
      <div className="Profile">

        <div className="profile-info-container">
          <img className="profile_picture" src={this.props.user.profile_picture} />
          <h1 className="profile-name">{this.props.user.username}</h1>
          <div className="profile-space"></div>
          <button className="follow-button">Follow</button>
        </div>

        <ul className="profile-images-container">
          {
            this.props.images.map(image => (
            <li key={image.id} className="profile-images">
              <Link to={`/images/${image.id}`}>
                <img src={image.image_url} />
              </Link>
            </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

export default Profile;
