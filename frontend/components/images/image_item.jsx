import React from 'react';
import { Link } from 'react-router-dom';




class ImageItems extends React.Component {
  constructor(props){
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  componentWillMount(){
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

    return `${fulldate} ${time}`;
  }

  handleLike(e){
    e.preventDefault();
    if (this.props.image.current_user_likes){
      this.props.deleteLike(this.props.imageId);
    } else {
      this.props.createLike(this.props.imageId);
    }
  }


  render (){
    console.log(this.props);
    if (!this.props.image|| !this.props.user){
      return null;
    }

    let likeButton;
    if (this.props.image.current_user_likes === true) {
      likeButton = (
        <button
          className="image-item-like-button"
          onClick={this.handleLike}>
          Unlike
        </button>
      );
    } else if (this.props.image.current_user_likes === false) {
      likeButton = (
        <button
          onClick={this.handleLike}
          className="image-item-unlike-button">
          Like
        </button>
      );
    } else {
      likeButton = null;
    }

    return (
      <div>
        <div className="image-item-image-container">
          <img className="image-item"src={this.props.image.image_url}/>
        </div>

        <div className="image-item-description-container">
          <div className="image-item-left-side">
            <Link
              to={`/users/${this.props.image.author_id}`}
              className="image-item-username">
              {this.props.user.username}
            </Link>
            <p className="image-item-description">
              {this.props.image.description}
            </p>
          </div>

        <div className="image-item-right-container">
          <div>
            {likeButton}
          </div>
          <p className="image-item-text">
            {this.dateConversion()}
          </p>
        </div>

      </div>
      </div>
    );
  }
}

export default ImageItems;
