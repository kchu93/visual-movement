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

  dateConversion(){
    let timestamp = new Date(this.props.image.created_at);
    let locale = "en-us";

    let month = timestamp.toLocaleString(locale, { month: "long" });
    let day = timestamp.getDay();
    let year = timestamp.getFullYear();

    let fulldate = month + " " + day + ", " + year;
    let time = timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    return fulldate + " " + time;
  }


  render (){
    console.log(this.props);
    if (!this.props.image){
      return null;
    }
    return (
      <div>
        <div className="image-item-image-container">
          <img className="image-item"src={this.props.image.image_url}/>
        <div className="image-item-details-container">
          <h1 className="image-item-username">{this.props.image.username}</h1>
        <h1 className="image-item-date">{this.dateConversion()}</h1>
        </div>
        </div>
      </div>
    );
  }
}

export default ImageItems;
