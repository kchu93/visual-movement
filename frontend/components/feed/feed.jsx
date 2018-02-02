import React from 'react';


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
              <li className="feed-images">
                <a href="#"><img src={image.image_url} /></a>
                <a className="username" href="#">{image.username}</a>
              </li>
            ))
          }
      </ul>
      </div>
    );
  }
}


export default Feed;
