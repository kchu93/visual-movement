import React from 'react';
import { Link } from 'react-router-dom';


class Likes extends React.Component {
  constructor(props){
    super(props);
    const liked = this.props.likes;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    if (this.liked){
      this.liked = true;
    } else {
      this.liked = false;
    }
  }

  handleSubmit(e){
    e.preventDefault();

    if (this.liked){
      this.props.deleteLike(this.props.imageId);
    } else {
      this.props.createLike(this.props.imageId);
    }
  }



  render (){
    if (this.liked){
      return(
        <div>
        <h1>UNLIKE</h1>
        <button onClick={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <div>
        <h1>LIKE</h1>
        <button onClick={this.handleSubmit} />
        </div>
      );
    }
  }
}

export default Likes;
