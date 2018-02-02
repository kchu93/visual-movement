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
    console.log(this.props);
    return (
      <div className="Profile">
      </div>
    );
  }
}

export default Profile;
