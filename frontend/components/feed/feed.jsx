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
              <img className="feed-images" src={image.image_url}/>
              
            ))
          }
        </div>
      </div>
    );
  }
}


export default Feed;
