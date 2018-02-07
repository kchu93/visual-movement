import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
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

  handleFollow(e) {
    e.preventDefault();
    if (this.props.follows === true){
      this.props.deleteFollow(this.props.match.params.userId);
    } else {
      this.props.createFollow(this.props.match.params.userId);
    }
  }

  render () {
    if (!this.props.user){
      return null;
    }

    let followButton;

    if (this.props.follows === false){
      followButton = (
        <button
          className="follow-button"
          onClick={this.handleFollow}>
          Follow
        </button>
      );
    } else if (this.props.follows === true){
      followButton = (
        <button
          onClick={this.handleFollow}
          className="unfollow-button">
          Unfollow
        </button>
      );
    } else {
      followButton = null;
    }


    return (
      <div className="Profile">

        <div className="profile-info-container">
          <img className="profile_picture" src={this.props.user.profile_picture} />
          <h1 className="profile-name">{this.props.user.username}</h1>
          <div className="profile-space"></div>
          {followButton}
        </div>

        <div className="profile-tabs-container">

          <Link
            className="profile-tab"
            to={`/users/${this.props.user.id}`}>
            Images
          </Link>

          <Link
            className="profile-tab"
            to={`/users/${this.props.user.id}/likes`}>
            Likes
          </Link>
        </div>

        <Masonry className="profile-images-container">
          {
            this.props.images.map(image => (
            <li key={image.id} className="profile-images">
              <Link to={`/images/${image.id}`}>
                <img src={image.image_url} />
              </Link>
            </li>
            ))
          }
        </Masonry>

      </div>
    );
  }
}

export default Profile;
