import React from 'react';
import { Link } from 'react-router-dom';


class ImageEdit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.imageId,
      description: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount(){
    this.props.fetchImage(this.props.imageId);
  }


  updateDescription(type){
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.updateImage(this.state).then(() => this.props.history.push(`/images/${this.props.imageId}`));
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteImage(this.props.imageId).then(() => this.props.history.push(`/users/${this.props.currentUser.id}`));
  }


  render() {
    if (!this.props.image){
      return null;
    }

    return (
      <div>

        <div className="image-item-image-container">
          <img className="image-item"src={this.props.image.image_url}/>
        </div>

        <div className="image-item-edit-left-side">
            <input
              className="image-item-edit-description"
              type="text"
              placeholder="Update description"
              value={this.state.description}
              onChange={this.updateDescription('description')}
            />
        </div>

        <div className="image-item-edit-container">

          <div className="image-item-right-side">
            <div className="image-item-edit-submit-container">
              <button
                className="image-item-edit-submit"
                onClick={this.handleSubmit}>
                <i class="fas fa-wrench"></i>
              </button>
            </div>

            <div className="image-item-edit-delete-container">
              <button
                className="image-item-edit-delete"
                onClick={this.handleDelete}>
                <i class="far fa-trash-alt"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ImageEdit;
