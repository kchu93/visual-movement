import React from 'react';
import { Link } from 'react-router-dom';

class LikesTab extends React.Component {
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
    console.log(this.props);
    if (!this.props.user){
      return null;
    }

    return (
      <div className="likes-tab">

        <div className="profile-info-container">
          <img className="profile_picture" src={this.props.user.profile_picture} />
          <h1 className="profile-name">{this.props.user.username}</h1>
          <div className="profile-space"></div>
          <button className="follow-button">Follow</button>
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

        <ul className="profile-images-container">
          {
            this.props.likes.map(liked => (
            <li key={liked.id} className="profile-images">
              <Link to={`/images/${liked.id}`}>
                <img src={liked.image_url} />
              </Link>
            </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

export default LikesTab;
