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
      <div className="feed-container">
        <h1 className="feed-header"></h1>
        <div className="image-container">
          {

            this.props.images.map(image => (
          <div>
            <img className="feed-images" src={image.image_url}/>
            <a className="username" href="#">{image.username}</a>
          </div>
            ))
          }
        </div>
      </div>
    );
  }
}


export default Feed;
