import React from 'react';
import { Link } from 'react-router-dom';


class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
  }

  render (){
    return (
      <div>
        <h1 className="feed-header"></h1>
        <ul className="feed-container">
          {

            this.props.images.map(image => (
              <li key={image.id} className="feed-images">
                <a href="#"><img src={image.image_url} /></a>
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
