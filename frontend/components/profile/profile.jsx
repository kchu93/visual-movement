import React from 'react';

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
    return (
      <div className="Profile">

        <div className="profile-info-container">
          <img src={this.props.user.profile_picture} />
          <h1 className="profile-header">{this.props.user.username}</h1>
          <div className="profile-space"></div>
          <button className="follow-button">FOLLOW</button>
        </div>

        <ul className="profile-container">
          {
            this.props.images.map(image => (
            <li key={image.id} className="profile-images">
              <a href="#"><img src={image.image_url} /></a>
            </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

export default Profile;
