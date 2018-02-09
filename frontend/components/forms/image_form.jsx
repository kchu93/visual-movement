import React from 'react';
import { Link } from 'react-router-dom';
import * as ApiUtil from '../../utils/image_api_util';


class ImageForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      author_id: this.props.currentUser.id,
      description: "",
      imageFile: "",
      imageUrl: ""
    };

    this.updateDescription = this.updateDescription.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount(){
    this.props.clearImageErrors();
  }

  updateDescription(e){
    e.preventDefault();
    this.setState({
      description: e.target.value
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors ? this.props.errors.map((error,i) => (
          <div
            className="error-text-signup"
            key={`error-${i}`}>
            {error}
          </div>
        )) : ""}
      </ul>
    );
  }


  updateFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function(){
      this.setState({
        imageFile: file, imageUrl: fileReader.result
      });
    }.bind(this);

    if (file){
      fileReader.readAsDataURL(file);
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("image[description]", this.state.description);
    formData.append("image[image]", this.state.imageFile);
    this.props.createImage(formData, this.goBack).then(() => this.props.history.push(`users/${this.props.currentUser.id}`));
  }

  handleBack(e){
    e.preventDefault();
    this.props.history.push(`/feed`);
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <button className="back-button-box" onClick={this.handleBack}>
            <i className="fas fa-times back-button-icon"></i>
          </button>
        </div>

      <div className="image-form-main-container">

        <h1>Create Image</h1>
        {this.renderErrors()}
        <div className="image-form-upper">
            <img
              className="image-form-image-preview"
              src={this.state.imageUrl}
            />
        </div>

          <input
            className="image-form-description-input"
            type="text"
            placeholder="Add caption"
            onChange={this.updateDescription} />

        <div className="image-form-lower">

          <input
            name="file"
            type="file"
            id="file"
            className="inputfile"
            onChange={this.updateFile} />

          <label htmlFor="file" className="image-form-label">Upload Image</label>



          <button
            className="image-form-submit"
            onClick={this.handleSubmit}>
            Create Image
          </button>

        </div>

    </div>
  </div>
    );
  }
}


export default ImageForm;
