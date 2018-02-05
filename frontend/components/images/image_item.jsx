import React from 'react';
import { Link } from 'react-router-dom';


class ImageItems extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.match.params.imageId) {
      this.props.fetchImage(this.props.match.params.imageId);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.imageId !== newProps.match.params.imageId){
      this.props.fetchImage(newProps.match.params.imageId);
    }
  }


  render (){
    if (!this.props.image){
      return null;
    }
    return (
      <div>
        <div>
          <img src={this.props.image.image_url}/>
        </div>
      </div>
    );
  }
}

export default ImageItems;
