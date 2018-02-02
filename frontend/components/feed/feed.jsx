import React from 'react';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
  }

  render (){
    console.log(this.props);
    return (
      <div>
        <h1>Feed</h1>
        <div>
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
