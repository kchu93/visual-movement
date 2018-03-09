import React from 'react';
import { Link } from 'react-router-dom';


class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id);
  }

  render (){

    return (
      <div>
        <h1 className="feed-header"></h1>
        <ul className="feed-container">
          {
            this.props.following_images.map(image => (
              <li key={image.id} className="feed-images">
                <Link to={`/images/${image.id}`}>
                  <img className="full-image" src={image.image_url} />
                </Link>
                <Link className="username" to={`/users/${image.author_id}`}>{image.username}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default Feed;
